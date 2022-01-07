import { configureStore} from '@reduxjs/toolkit';
import { userReducer} from '../Features/userAuth'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })
});
