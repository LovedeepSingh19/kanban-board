"use client"
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

type SidebarProps = {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>};

const Sidebar:React.FC<SidebarProps> = ({open, setOpen}) => {
    
    return (
        <>
        <div className={`text-white h-screen ${!open? "w-[285px]": "w-10"} bg-theme fixed block`}>
            <div className='pt-8 items-center flex text-[#ffff]' >
                <button onClick={() => {setOpen(!open)}}>
                    <BsArrowLeftCircle  />
                </button>
            </div>
        </div>
        </>
      );
}
export default Sidebar;