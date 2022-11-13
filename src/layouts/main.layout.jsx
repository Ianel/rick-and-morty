import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start md:items-stretch">
      <Sidebar />
      <Navbar />
      <main className="p-4 md:absolute md:right-0 md:top-0 md:w-2/3 lg:w-5/6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
