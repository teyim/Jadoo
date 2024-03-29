import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth, db } from '../config/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

const provider = new GoogleAuthProvider()

//Thunks
export const signUp = createAsyncThunk('user/signUp', async (data, { dispatch, rejectWithValue }) => {
    try {
        //create user
        const { email, password, phone, firstName, lastName} = data
        await createUserWithEmailAndPassword(auth, email, password)

        //add user info to store 
        dispatch(SET_USER(auth.currentUser.toJSON()))

        //get user id
        const uid = auth.currentUser.uid
        //create user document in db
        await setDoc(doc(db, 'users', uid), {
            email: auth.currentUser.email,
            phoneNumber: phone,
            firstName: firstName,
            lastName: lastName
        })
        //return firebase data
        const userData = await getDoc(doc(db, 'users', uid))
        if (userData.exists()) {
            return userData.data()
        }
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }


})

export const logIn = createAsyncThunk('user/logIn', async (data, { dispatch, rejectWithValue }) => {
    try {
        const { email, password } = data
        //login user
        await signInWithEmailAndPassword(auth, email, password)
        //add user info to store 
        dispatch(SET_USER(auth.currentUser.toJSON()))

        //add user to firebase collection
        const uid = auth.currentUser.uid
        const userData = await getDoc(doc(db, 'users', uid))
        if (userData.exists()) {
            return userData.data()
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const googlelogIn = createAsyncThunk('user/googlelogIn', async (data, { dispatch, rejectWithValue }) => {
    try {
        provider.setCustomParameters({
            prompt: 'select_account',   
        })
        let userfullName=[];
        const data = await signInWithPopup(auth, provider)
        //split diaplay name
        userfullName = data?.user?.displayName.split(/(\s+)/);
        //get user id
        const uid = auth.currentUser.uid
        //create user db record if it does not already exist
        const userData = await getDoc(doc(db, 'users', uid))
        if (!userData.exists()) {
            await setDoc(doc(db, 'users', uid), {
                email: auth.currentUser.email,
                phoneNumber: '',
                firstName: userfullName[0],
                lastName: `${userfullName[1]+ userfullName[2]}`
            })
        }

        dispatch(SET_USER(auth.currentUser.toJSON()))
        return userData.data()
       
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const logOut = createAsyncThunk('user/logOut', async (data, {dispatch, rejectWithValue }) => {
    try {
        //logout user
        await signOut(auth)
        dispatch(LOGOUT())
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const initState = createAsyncThunk('user/initState',async(data,{dispatch,rejectWithValue})=>{
    try {
        dispatch(SET_USER(auth.currentUser.toJSON()))
        const uid = auth.currentUser.uid
        const userData = await getDoc(doc(db, 'users', uid))
        if (userData.exists()) {
            return userData.data()
        }
    } catch (error) {
        return rejectWithValue(error)
       
    }
})


export const userAuthSlice = createSlice({

    //state
    name: "userAuth",
    initialState: {
        user: null,
        userData: null,
        initialised: false,
        loading: false,
        initialLoad: false,
        googleAuthloading: false,
        errorMessage: null
    },

    //reducers
    reducers: {
        SET_INITIALISED: (state, { payload }) => {
            state.initialised = payload
        },
        LOGOUT: (state, action) => {
            state.userData = null
            state.user=null
        },
        SET_USER: (state, { payload }) => {
            state.user = payload
        }
    },
    extraReducers: {
        //signup action types
        [signUp.pending]: (state) => {
            state.loading = true
        },
        [signUp.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = null
            state.userData = payload
        },
        [signUp.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload?.code
        },

        //login action types
        [logIn.pending]: (state) => {
            state.loading = true
        },
        [logIn.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = null
            state.userData = payload
        },
        [logIn.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload?.code
        },

        //login action types
        [logOut.pending]: (state) => {
            state.loading = true
        },
        [logOut.fulfilled]: (state) => {
            state.loading = false
            state.errorMessage = null
            state.userData = null
            state.user = null
        },
        [logOut.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMessage = payload?.code
        },
        //initState action types
        [initState.pending]: (state) => {
            state.initialLoad = true
        },
        [initState.fulfilled]: (state,{payload}) => {
            state.initialLoad = false
            state.errorMessage = null
            state.userData = payload
            state.initialised = true
        },
        [initState.rejected]: (state, { payload }) => {
            state.initialLoad = false
            state.errorMessage = payload?.code
        },
        //google login action types
        [googlelogIn.pending]: (state) => {
            state.googleAuthloading = true
        },
        [googlelogIn.fulfilled]: (state, { payload }) => {
            state.googleAuthloading = false
            state.errorMessage = null
            state.userData=payload
        },
        [googlelogIn.rejected]: (state, { payload }) => {
            state.googleAuthloading = false
            state.errorMessage = payload?.code
        },
    }
})






//Thunk
// export const setAuthListener = async (dispatch, state) => {
//     auth.onAuthStateChanged((user) => {
//         if (user && !state().userAuth.initialised) {
//             dispatch(LOGIN({ user: auth.currentUser.toJSON() }));
//             dispatch(getUser());
//         }
//         //if we are not initialised,then initialise
//         !state().userAuth.initialised && dispatch(SET_INITIALISED(true));
//     })
// }

// export const login = (email, password) => async (dispatch, state) => {
//     try {
//         const response = await signInWithEmailAndPassword(auth, 'frumartin@gmail.com', 'teyimasobo123');
//         dispatch(LOGIN({ user: auth.currentUser.toJSON() }))
//         dispatch(getUser())
//         return response;
//     } catch (error) {
//         console.log(error.code)
//     }

// }

// export const signup = ({ email, password }) => async (dispatch, state) => {
//     try {
//         const responseData = await createUserWithEmailAndPassword(auth, 'belamartins@gmail.com', 'dem123');

//         //add user to firebase collection
//         const uid = auth.currentUser.uid
//         await setDoc(doc(db, 'users'), {
//             id: uid,
//             email: responseData.user.email,
//             ...auth.currentUser.toJSON()
//         })

//         //update store
//         dispatch(SIGNUP({ user: auth.currentUser.toJSON() }))
//         const userData = {
//             id: uid,
//             email: responseData.user.email,
//             ...auth.currentUser.toJSON()
//         }
//         dispatch(SET_USER_DATA({ userData }))
//         return state().userAuth.userData;
//     } catch (error) {
//         alert(error.code)
//     }

// }


//get user data from firebase
// export const getUser = () => async (dispatch, state) => {
//     let userData = null;
//     const uid = auth.currentUser.uid;

//     //query user data
//     const reponseData = await collection(db, 'users').id(uid).get();
//     if (reponseData.exists) {
//         userData = {
//             id: reponseData.id,
//             ...reponseData.data()
//         };
//     }

//     //update store
//     dispatch(SET_USER({ userData }));
//     return state().userAuth.userData;

// }


export const { SET_INITIALISED, LOGOUT, SET_USER } = userAuthSlice.actions
export const userReducer = userAuthSlice.reducer