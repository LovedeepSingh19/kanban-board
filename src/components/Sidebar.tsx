"use client";
import React, { Dispatch, SetStateAction } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdEmail, MdOutlineKeyboardArrowRight, MdSpeed } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
import { IoChatbubblesSharp, IoSettings } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { RiContactsBook2Line } from "react-icons/ri";
import { GiShop } from "react-icons/gi";
import { FaFileInvoice } from "react-icons/fa";
import { BsFillCalendarFill, BsPersonVideo3 } from "react-icons/bs";

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`text-white h-screen ${
          !open ? "w-[285px]" : "w-10"
        } bg-theme fixed block overflow-hidden`}
      >
        <div className="pt-8 items-center justify-evenly flex text-[#ffff]">
          <div className={`${open ? "hidden" : ""} pl-2 text-[20px] `}>
            weFrameTech
          </div>
          <button
            className="pl-3 pr-3 text-items text-2xl"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <div className="pt-10">
          <text
            className={`text-[#ffffffc1] flex pl-8 ${open ? "hidden" : ""}`}
          >
            MAIN MENU
          </text>
        </div>
        <div className="pt-5">
          <div className="text-[#464366] hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <MdSpeed className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4`}>dashboard</text>
            </div>
            <div className="w-0"></div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-[#464366] hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <MdEmail className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4`}>Email</text>
            </div>
            <div className={`${open ? "hidden" : ""} flex`}>
              <div className="w-5 h-5 bg-blue rounded-full text-[#ffff] text-[10px] flex items-center justify-center">
                17
              </div>
              <IoIosArrowDown className={`pl-1 text-items`} />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-items hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <IoChatbubblesSharp className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4 mr-7`}>Chat</text>
            </div>
            <div className={`${open ? "hidden" : ""} w-2`}></div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-selected hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <HiMiniSquares2X2 className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4 `}>Kanban</text>
            </div>
            <MdOutlineKeyboardArrowRight
              className={`${open ? "hidden" : ""} pl-1 text-items`}
            />
          </div>
        </div>
        <div className="pt-5 ml-1">
          <div className="text-items hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <RiContactsBook2Line className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4 `}>Contact</text>
            </div>
            <div
              className={`${
                open ? "hidden" : ""
              } w-8 h-4 flex items-center text-[10px] justify-center bg-pink text-[#ffff] rounded-xl`}
            >
              NEW
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-items hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <BsFillCalendarFill className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4 `}>Calender</text>
            </div>
            <div className={`${open ? "hidden" : ""} w-2`}></div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-items hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <BsPersonVideo3 className="text-2xl text-[#464366]" />
              <text className={`${open ? "hidden" : ""} pl-4 `}>Courses</text>
            </div>
            <MdOutlineKeyboardArrowRight
              className={`${open ? "hidden" : ""} pl-1 text-items`}
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="text-items hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <GiShop className="text-2xl text-[#464366]" />
              <text className={`${open ? "hidden" : ""} pl-4 `}>Shop</text>
            </div>
            <div className={`${open ? "hidden" : ""} w-9`}></div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-items hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <FaFileInvoice className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4 `}>Invoices</text>
            </div>
            <MdOutlineKeyboardArrowRight
              className={`${open ? "hidden" : ""} pl-1 text-items`}
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="text-items hover:cursor-pointer flex items-center justify-around ">
            <div className="flex items-center">
              <IoSettings className="text-2xl" />
              <text className={`${open ? "hidden" : ""} pl-4 `}>Settings</text>
            </div>
            <div className={`${open ? "hidden" : ""} w-2`}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
