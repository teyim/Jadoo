import React, { useState } from "react";
import Button from "Components/Button/Button";
import MenuDropdown from "Components/MenuDropdown/MenuDropdown";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "How it works", href: "#", current: false },
  { name: "Reviews", href: "#", current: false },
  { name: "Agencies", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [openmobilemenu, setOpenMobileMenu] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openmobilemenu);
  };
  const handleloginOrSignClick = () => {
    if (openmobilemenu) {
      setOpenMobileMenu();
      setIsAuth(true);
    }
    setIsAuth(true);
  };
  return (
    <nav className="bg-gray-100 font-rubik font-semibold py-3 shadow-md border-b-2">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="">
            <a
              href="#"
              className="flex items-center py-2 px-2 text-blue-700 font-boing text-4xl">
              Jadoo.
            </a>
          </div>
          <div className="hidden md:flex my-auto space-x-1 font-medium">
            <a href="/" class="py-5 px-3 text-gray-700 hover:text-blue-700">
              About
            </a>
            <a href="/" class="py-5 px-3 text-gray-700 hover:text-blue-700">
              Testimonials
            </a>
          </div>

          {isAuth ? (
            <MenuDropdown customStyle=" hidden md:flex"></MenuDropdown>
          ) : (
            <div className="hidden md:flex items-center space-x-1 px-3">
              <Button
                click={handleloginOrSignClick}
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
          <a href="/" class=" py-3 text-sm hover:bg-blue-400 border-2">
            How it works
          </a>
          <a href="/" class=" py-3 text-sm hover:bg-blue-400 border-b-2">
            Reviews
          </a>
          <a href="/" class=" py-3 text-sm hover:bg-blue-400 border-b-2">
            Agencies
          </a>
          {isAuth ? (
            <div className=" font-medium font-light text-blue-700 flex flex-col">
              <a
                href="/"
                class=" py-3 text-sm hover:bg-blue-400 border-b-2 border-t-4 hover:text-white ">
                Account
              </a>
              <a
                href="/"
                class=" py-3 text-sm hover:bg-blue-400 hover:text-white ">
                Logout
              </a>
            </div>
          ) : (
            <Button
              customStyle={" " + "bg-blue-700 hover:bg-blue-800 mt-3 mx-auto"}
              click={handleloginOrSignClick}>
              Login or SignUp
            </Button>
          )}
        </div>
      ) : null}
    </nav>
  );
}
