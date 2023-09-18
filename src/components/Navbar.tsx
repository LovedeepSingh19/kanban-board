"use client";
import React, { useState } from "react";
import { IoIosBriefcase, IoIosNotifications } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { BsPersonVideo3 } from "react-icons/bs";
import { RiArrowDownSFill, RiCheckboxMultipleFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

type NavbarProps = {
  isOpen: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isOpen }) => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className={`bg-theme flex-wrap ${!isOpen ? "ml-10" : ""}`}>
        <div className=" flex flex-wrap items-center justify-between mx-auto xs:p-2 px-4 py-2">
          <div
            className={`${
              isTabletMid ? "" : "hidden"
            } text-[#ffff] text-[18px]`}
          >
            weFrameTech
          </div>
          <form className={`flex-grow max-w-sm ${isTabletMid ? "hidden" : ""}`}>
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
                className=" bg-components font-normal items-center h-[50px] text-[#ffff] text-[14px] w-full pl-14 text-sm rounded-full "
                placeholder="Search here"
                required
              />
            </div>
          </form>
          <div className={`ml-2 mr-2 hidden lg:flex hover:cursor-pointer`}>
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
            <div
              className="bg-components items-center hidden mr-4 lg:flex justify-between w-32 p-2 rounded-full hover:cursor-pointer"
              onClick={() => {}}
            >
              <div className="w-5 h-5 bg-blue rounded-full pr-1"></div>
              <text className="text-[#ffff]">English</text>
              <div className="pl-1 text-selected">
                <RiArrowDownSFill />
              </div>
            </div>
            <div
              className="hover:cursor-pointer flex items-center"
              onClick={() => setModal(!modal)}
            >
              <div className="bg-[#a3a0b0] rounded-lg h-8 w-8 ml-2"></div>
              <div className={`m-2 items-center justify-end flex-col`}>
                <p className="font-normal	text-sm leading-5 text-right text-[#ffffff]">
                  Instructor Day
                </p>
                <p className="font-normal text-[10px] leading-4 text-right text-[#787486]">
                  Super Admin
                </p>
              </div>
              <div className="m-2 text-selected">
                <RiArrowDownSFill className="h-6 w-6" />
              </div>
              {modal && (
                <div className="z-50 absolute top-[60px] w-[160px] right-7 text-base text-[#ffff] bg-components rounded-lg shadow">
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 :text-gray-200"
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
