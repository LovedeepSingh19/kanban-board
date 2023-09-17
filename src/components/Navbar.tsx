"use client"
import React from "react";
import {
  IoIosBriefcase,
  IoIosNotifications,
} from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { BsPersonVideo3 } from "react-icons/bs";
import { RiArrowDownSFill, RiCheckboxMultipleFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

type NavbarProps = {
  isOpen: boolean,
};

const Navbar: React.FC<NavbarProps> = ({isOpen}) => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <header className={`bg-theme flex-wrap ${!isOpen? "ml-10": ""}`}>
        <div className=" flex flex-wrap items-center justify-between mx-auto xs:p-2 px-4 py-2">
          <form className={`flex-grow max-w-sm`}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className={`relative pl-2`}>
              <div className="absolute inset-y-0 text-items text-2xl flex items-center pl-4 pointer-events-none">
                <div className="w-5 h-6">
                  <LiaSearchSolid />
                </div>
              </div>
              <input
                type="search"
                className=" bg-components font-normal items-center h-[50px] text-[14px] w-full pl-14 text-sm rounded-full bg-gray-50 "
                placeholder="Search here"
                required
              />
            </div>
          </form>
          <div className={`ml-2 mr-2 hidden md:flex lg:flex hover:cursor-pointer`}>
            <p className="underline text-sm leading-5 text-right font-semibold text-selected">
              OTHER MENUS
            </p>
          </div>

          <div className="flex items-center md:order-2">
            <div
              className="justify-between hidden w-full xl:flex xl:w-auto mr-12"
              id="mobile-menu-2"
            >
              <ul className="flex flex-row rounded-lg md:space-x-6 md:mt-0 md:border-0 ">
                <li>
                  <div className="hover:cursor-pointer">
                    <div className="h-4 w-4 mx-3 mb-2 absolute z-10 text-xs rounded-full bg-blue flex justify-center items-center align-baseline font-bold text-theme">
                      <>12</>
                    </div>
                    <div className="w-5 h-6 hover:text-selected text-items text-2xl">
                      <IoIosNotifications />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="hover:cursor-pointer">
                    <div className="h-4 w-4 mx-3 mb-2 absolute z-10 text-xs rounded-full bg-blue flex justify-center items-center font-bold text-theme">
                      <>5</>
                    </div>
                    <div className="w-5 h-6 hover:text-[#ffffff] text-[#464366] text-2xl">
                      <BsPersonVideo3 />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="hover:cursor-pointer">
                    <div className="h-4 w-4 mx-3 mb-2 absolute z-10 text-xs rounded-full bg-blue flex justify-center items-center align-baseline font-bold text-theme">
                      <>2</>
                    </div>
                    <div className="w-5 h-6 hover:text-selected text-items text-2xl">
                      <RiCheckboxMultipleFill />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="hover:cursor-pointer">
                    <div className="h-4 w-4 mx-3 mb-2 absolute z-10 text-xs rounded-full bg-pink flex justify-center items-center align-baseline font-bold text-theme">
                      <>!</>
                    </div>
                    <div className="w-5 h-6 hover:text-selected text-items text-2xl">
                      <IoIosBriefcase />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-components items-center hidden mr-4 lg:flex justify-between w-32 p-2 rounded-full hover:cursor-pointer" onClick={() => {}}>
              <div className="w-5 h-5 bg-blue rounded-full pr-1"></div>
              <text className="text-[#ffff]">English</text>
              <div className="pl-1 text-selected">
                <RiArrowDownSFill />
              </div>
            </div>
            <div className="bg-[#a3a0b0] rounded-xl h-8 w-8 ml-2">
            </div>
            <div className={`m-2 flex-col ${isTabletMid? 'hidden': ''}`} id="user_details">
              <p className="font-normal	text-sm leading-5 text-right text-[#ffffff]">
                Instructor Day
              </p>
              <p className="font-normal text-[10px] leading-4 text-right text-[#787486]">
                Super Admin
              </p>
            </div>
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
            </button>
            <div className="m-2 text-selected">
              <RiArrowDownSFill />
            </div>
            {/* <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow :bg-gray-700 :divide-gray-600"
              id="user-dropdown"
            > */}
            {/* <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 :text-white">
                  Bonnie Green
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 :hover:bg-gray-600 :text-gray-200 :hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
