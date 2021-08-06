import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

export default function MenuDropdown(props) {
  const { customStyle } = props;
  return (
    <div className={customStyle + " my-auto text-right font-rubik "}>
      <Menu as="div" className="relative inline-block text-left">
        <div className="">
          <Menu.Button className="inline-flex justify-evenly  w-full px-4 py-2 text-sm font-medium text-gray-700 text-md rounded-md ">
            <img
              className="h-9 w-9 rounded-md mx-2 my-auto border-2 border-blue-700"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="my-auto">Hey! Teyim Asobo</span>
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 my-auto text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 w-56 mt-2 font-semibold origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "text-blue-700" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-md`}>
                    {active ? (
                      <UserCircleIcon
                        className="w-6 h-6 mr-2  text-blue-600"
                        aria-hidden="true"
                      />
                    ) : (
                      <UserCircleIcon
                        className="w-6 h-6 mr-2 text-gray-600"
                        aria-hidden="true"
                      />
                    )}
                    <span className="mt-1 ">Account</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "text-blue-700" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-md`}>
                    {active ? (
                      <LogoutIcon
                        className="w-6 h-6 mr-2  text-blue-600"
                        aria-hidden="true"
                      />
                    ) : (
                      <LogoutIcon
                        className="w-6 h-6 mr-2 text-gray-600"
                        aria-hidden="true"
                      />
                    )}
                    <span className="mt-1 ">Logout</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}