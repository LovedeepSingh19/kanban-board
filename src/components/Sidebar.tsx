"use client"
import React, { Dispatch, SetStateAction } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

type SidebarProps = {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>};

const Sidebar:React.FC<SidebarProps> = ({open, setOpen}) => {
    
    return (
        <>
        <div className={`text-white h-screen ${!open? "w-[285px]": "w-10"} bg-theme fixed block overflow-hidden`}>
            <div className='pt-8 items-center justify-evenly flex text-[#ffff]' >
                <div className={`${open ? "hidden": ""} pl-2 `}>
                    weFrameTech
                </div>
                <button className='pl-3 pr-3 text-items text-2xl' onClick={() => {setOpen(!open)}}>
                    <BsArrowLeftCircle  />
                </button>
            </div>
            <div>
                
            </div>
        </div>
        </>
      );
}
export default Sidebar;