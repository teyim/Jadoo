import React, { useState } from "react";
import Button from "Components/Button/Button";
import MenuDropdown from "Components/NavbarDropdown/NavbarDropdown";
import { Link, useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logOut } from "Features/userAuth";
import { CgUserlane} from 'react-icons/cg'


export default function NavBar({disabled}) {
const history = useHistory();
const dispatch = useDispatch()
 const [openmobilemenu, setOpenMobileMenu] = useState(false);
const { user} = useSelector(state => state.user)

 const handleMobileMenu = () => {
  setOpenMobileMenu(!openmobilemenu);
 };
    const handlelogOut = () => {

        dispatch(logOut())
    }
 return (
  <nav className="bg-gray-100 font-rubik font-semibold py-3 shadow-md border-b-2">
   <div className="max-w-8xl mx-auto px-4">
    <div className="flex justify-between">
     <div className="flex justify-center">
    <CgUserlane className="w-10 h-10 my-auto text-blue-700 " />
      <Link
       to='/Jadoo'
       className="flex items-center py-2 px-2 text-blue-700 font-boing text-3xl">
       Jadoo.
      </Link>
     </div>
                 {!disabled?
                     (<div className="hidden md:flex my-auto space-x-1 font-medium">
                         <Link href="/Jadoo" className="py-5 px-3 text-gray-700 hover:text-blue-700">
                             About
                         </Link>
                         <Link
                             to="/Jadoo"
                             className="py-5 px-3 text-gray-700 hover:text-blue-700">
                             Testimonials
                         </Link>
                     </div>):null
                 }
     {user ? (
      <MenuDropdown customStyle=" hidden md:flex"></MenuDropdown>
     ) : (
      <div className="hidden md:flex items-center space-x-1 px-3">
       <Button
         click={() => history.push('/signin')}
        customStyle={" " + "bg-blue-700 hover:bg-blue-800"}>
        Login or Signup
       </Button>
      </div>
     )}
     <div className="md:hidden flex items-center text-gray-600">
      <button
       className="focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-sm focus:ring-opacity-50"
       onClick={handleMobileMenu}>
       <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M4 6h16M4 12h16M4 18h16"
        />
       </svg>
      </button>
     </div>
    </div>
   </div>
   {openmobilemenu ? (
    <div className=" md:hidden text-center text-gray-700 flex flex-col content-evenly">
    {!disabled?
    (<><Link to='/Jadoo' class=" py-3 text-sm hover:bg-blue-400 border-2">
      About
     </Link>
     <Link to='/Jadoo' class=" py-3 text-sm hover:bg-blue-400 border-b-2">
      Testimonials
     </Link></>):null
     }  
     {user ? (
      <div className="font-light text-blue-700 flex flex-col">
       <Link
        to="/dashboard"
        class=" py-3 text-sm font-semibold hover:bg-blue-500 border-b-2 border-t-4 hover:text-white ">
        Account
       </Link>
       <button class=" py-3 text-sm hover:bg-blue-400 hover:text-white " onClick={handlelogOut}>
        Logout
       </button>
      </div>
     ) : (
      <Button
        click={() => history.push('/signin')}
       customStyle={" " + "bg-blue-700 hover:bg-blue-800 mt-3 mx-auto"}
       >
       Login or SignUp
      </Button>
     )}
    </div>
   ) : null}
  </nav>
 );
}
