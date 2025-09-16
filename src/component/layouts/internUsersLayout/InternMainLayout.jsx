import React, { useState } from "react";
import InternSidebar from "./InternSidebar";
import { Outlet } from "react-router-dom";

const InternMainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen max-w-full overflow-hidden relative">
      {/* Sidebar - Starts After Header */}

      <div
        className={`flex justify-center fixed left-0 z-40 h-full w-[300px] transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <InternSidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30  bg-opacity-30 backdrop-blur-md lg:hidden"
        ></div>
      )}
      <div className="flex-1 flex mx-auto flex-col w-full ml-0 lg:ml-[300px]">
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-28 bg-[#05051A]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default InternMainLayout;
