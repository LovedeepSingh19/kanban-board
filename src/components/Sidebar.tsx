"use client"
import React, { Dispatch, SetStateAction } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdSpeed } from 'react-icons/md';

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
                <text className='text-[#ffffffc1] flex pl-8'>MAIN MENU</text>
            </div>
            <div className='pt-8'>
                <div className='text-[#ffffffc1] flex items-start justify-around '>
                    <MdSpeed className='text-lg' />
                    <text>Dashboard</text>
                </div>
            </div>
        </div>
        </>
      );
}
export default Sidebar;