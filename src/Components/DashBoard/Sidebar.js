import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import { RiRoadMapFill, RiLogoutCircleRFill } from "react-icons/ri"
import { logOut } from 'Features/userAuth';
import { useDispatch } from 'react-redux';

function Sidebar({ sidebarOpen, setSidebarOpen, toggleTabs}) {

    const dispatch=useDispatch();
    const {push}=useHistory();

    const trigger = useRef(null);
    const sidebar = useRef(null);

    //change to a single state object
    const [showHome, setShowHome] = useState(true)
    const [showprofilePage, setshowprofilePage] = useState(false)
    const [showTripsPage, setshowTripsPage] = useState(false)

    const handleLogOut=()=>{
        dispatch(logOut()).then((data) => {
            if (data?.meta?.requestStatus === "fulfilled") {
                push('/')
            }
        })
    }

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    const togglePages = (pageName) => {
        //refactor this code
        if (pageName === 'dashboard'&&showHome!==true) {
            setshowTripsPage(false)
            setshowprofilePage(false)
            setShowHome(!showHome)
            toggleTabs(pageName);
        }
        if (pageName === 'profilePage' && showprofilePage!==true) {
            setshowTripsPage(false)
            setShowHome(false)
            setshowprofilePage(!showprofilePage)
            toggleTabs(pageName);
        }
        if (pageName === 'tripsPage' && showTripsPage!==true) {
            setShowHome(false)
            setshowprofilePage(false)
            setshowTripsPage(!showTripsPage)
            toggleTabs(pageName);
        }
        
    }

    return (
        <div className="lg:w-64">
            {/* Sidebar backdrop (mobile only) */}
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
            >

                {/* Sidebar header */}
                <div className="flex justify-between mb-10 pr-3 sm:px-2">
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-gray-500 hover:text-gray-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}
                    <NavLink exact to="/" className="block mx-auto">
                        <svg width="50" height="50" viewBox="0 0 32 32">
                            <defs>
                                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                    <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                                    <stop stopColor="#A5B4FC" offset="100%" />
                                </linearGradient>
                                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                    <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                                    <stop stopColor="#38BDF8" offset="100%" />
                                </linearGradient>
                            </defs>
                            <rect fill="#6366F1" width="32" height="32" rx="16" />
                            <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                            <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                            <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                        </svg>
                    </NavLink>
                </div>

                {/* Links */}
                <div>
                    <ul className="mt-8">
                        {/* Dashboard */}
                        <li className={`px-3 py-3 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${showHome && 'bg-gray-900'}`} onClick={() => togglePages('dashboard')}>
                            <div className={`block text-gray-200 hover:text-white transition duration-150 ${showHome && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <AiFillHome className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400 ${showHome && 'text-indigo-600'}`} />
                                    <span className="text-sm font-medium my-auto">Home</span>
                                </div>
                            </div>
                        </li>
                        <li className={`px-3 py-3 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${showprofilePage && 'bg-gray-900'}`} onClick={() => togglePages('profilePage')}>
                            <div className={`block text-gray-200 hover:text-white transition duration-150 ${showprofilePage && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <FaUserCircle className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400 ${showprofilePage && 'text-indigo-600'}`} />
                                    <span className="text-sm font-medium">Profile</span>
                                </div>
                            </div>
                        </li>
                        <li className={`px-3 py-4 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${showTripsPage && 'bg-gray-900'}`} onClick={() => togglePages('tripsPage')}>
                            <div className={`block text-gray-200 hover:text-white transition duration-150 ${showTripsPage && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <RiRoadMapFill className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400 ${showTripsPage && 'text-indigo-600'}`} />
                                    <span className="text-sm font-medium">My Trips</span>
                                </div>
                            </div>
                        </li>
                        <li className={`px-3 py-8 rounded-sm mb-0.5 last:mb-0 cursor-pointer`}>
                            <div className={`block text-gray-200 hover:text-white transition duration-150`}>
                                <div className="flex flex-grow" onClick={handleLogOut}>
                                    <RiLogoutCircleRFill className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400`} />
                                    <span className="text-sm font-medium">Logout</span>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;
