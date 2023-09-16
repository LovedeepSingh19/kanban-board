import React from "react";
import {
  IoIosArrowDown,
  IoIosBriefcase,
  IoIosNotifications,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { BsPersonVideo3 } from "react-icons/bs";
import { RiCheckboxMultipleFill } from "react-icons/ri";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <nav className="bg-theme md:px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xs:p-2 px-4 py-2">
          <form className=" lg:w-[400px] xs:w-[100px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className={`relative top-2 md:pl-200 pl-10`}>
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

          <div className="ml-2 mr-2">
            <p className="underline text-sm leading-5 text-right font-semibold text-selected">
              OTHER MENUS
            </p>
          </div>
          <div className="flex items-center md:order-2">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto mr-12"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col md:p-0 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 ">
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
            <div className="m-2">
              <p className="font-normal	text-base leading-5 text-right text-[#0D062D]">
                Anima Agrawal
              </p>
              <p className="font-normal text-[14px] leading-4 text-right text-[#787486]">
                U.P, India
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
            <div className="m-2">
              <IoIosArrowDown />
            </div>
            {/* <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            > */}
            {/* <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
