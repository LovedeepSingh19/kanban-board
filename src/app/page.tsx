"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import KanbanBoard from "@/components/board/KanbanBoard";
import KanbanContextComponent from "@/context/KanbanContextComponent";
import ProgressComponent from "@/components/board/ProgressComponent";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let isTabletSm = useMediaQuery({ query: "(max-width: 1000px)" });

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

        <div
          className={`flex-1 ${
            isSidebarOpen ? "ml-10" : "ml-40 pl-20"
          } transition-all bg-black`}
        >
          <Navbar isOpen={isSidebarOpen} />

          <main className={`${!isSidebarOpen ? "ml-10" : ""} p-4`}>
            {/* <div className={`${!isSidebarOpen? "ml-10":""}`}> */}
            <ProgressComponent />
            <div className="overflow-auto">
              <KanbanContextComponent>
                <KanbanBoard isOpen={isSidebarOpen} />
              </KanbanContextComponent>
            </div>
            {/* </div> */}
          </main>
        </div>
      </div>
    </>
  );
}
