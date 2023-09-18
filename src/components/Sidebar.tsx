"use client"
import React, { Dispatch, SetStateAction } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdEmail, MdOutlineKeyboardArrowRight, MdSpeed } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowDropright } from 'react-icons/io';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { HiMiniSquares2X2 } from 'react-icons/hi2';

type SidebarProps = {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>};

const Sidebar:React.FC<SidebarProps> = ({open, setOpen}) => {
    
    return (
        <>
        <div className={`text-white h-screen ${!open? "w-[285px]": "w-10"} bg-theme fixed block overflow-hidden`}>
            <div className='pt-8 items-center justify-evenly flex text-[#ffff]' >
                <div className={`${open ? "hidden": ""} pl-2 text-[20px] `}>
                    weFrameTech
                </div>
                <button className='pl-3 pr-3 text-items text-2xl' onClick={() => {setOpen(!open)}}>
                    <RxHamburgerMenu  />
                </button>
            </div>
            <div className='pt-10'>
                <text className={`text-[#ffffffc1] flex pl-8 ${open? "hidden": ""}`}>MAIN MENU</text>
            </div>
            <div className='pt-8'>
                <div className='text-[#464366] hover:cursor-pointer flex items-center justify-around '>
                    <div className='flex items-center'>
                    <MdSpeed className='text-3xl' />
                    <text className={`${open? "hidden": ""} pl-4`} >dashboard</text>
                    </div>
                    <div className='w-0'></div>
                </div>
            </div>
            <div className='pt-8'>
                <div className='text-[#464366] hover:cursor-pointer flex items-center justify-around '>
                    <div className='flex items-center'>
                    <MdEmail className='text-3xl' />
                    <text className={`${open? "hidden": ""} pl-4`} >Email</text>
                    </div>
                    <div className={`${open? "hidden": ""} flex`}>
                    <div className="w-5 h-5 bg-blue rounded-full text-[#ffff] text-[10px] flex items-center justify-center">17</div>
                    <IoIosArrowDown className={`pl-1 text-items`} />
                    </div>
                </div>
            </div>
            <div className='pt-8'>
                <div className='text-items hover:cursor-pointer flex items-center justify-around '>
                    <div className='flex items-center'>
                    <IoChatbubblesSharp className='text-3xl' />
                    <text className={`${open? "hidden": ""} pl-4 mr-7`} >Chat</text>
                    </div>
                    <div className={`${open? "hidden": ""} w-2`}></div>

                </div>
            </div>
            <div className='pt-8'>
                <div className='text-selected hover:cursor-pointer flex items-center justify-around '>
                    <div className='flex items-center'>
                    <HiMiniSquares2X2 className='text-3xl' />
                    <text className={`${open? "hidden": ""} pl-4 `} >Kanban</text>
                    </div>
                    <MdOutlineKeyboardArrowRight className={`pl-1 text-items`} />

                </div>
            </div>
        </div>
        </>
      );
}
export default Sidebar;