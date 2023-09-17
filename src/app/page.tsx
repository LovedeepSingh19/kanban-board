"use client"
import "./globals.css"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import KanbanBoard from "@/components/board/KanbanBoard";
import KanbanContextComponent from "@/context/KanbanContextComponent";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let isTabletSm = useMediaQuery({ query: "(max-width: 620px)" });

  useEffect(() => {
      if (!isTabletSm) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    }, [isTabletSm]);


  return (
    <>
   <div className="flex flex-col h-screen">
      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />

      <div className={`flex-1 ${isSidebarOpen ? 'ml-10' : 'ml-40 pl-20'} transition-all bg-black`}>
        <Navbar isOpen={isSidebarOpen} />

        <main className="p-4 ">
        <div className={`${!isSidebarOpen? "ml-10":""}`}>
          <KanbanContextComponent>
            <KanbanBoard />
          </KanbanContextComponent>
    </div>
        </main>
      </div>
    </div>
    </>
  );
}
