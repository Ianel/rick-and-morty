import React from "react";
import Sidebar from "../components/SIdebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row justify-start items-stretch">
      <Sidebar />
      <main className="p-4 absolute right-0 top-0 w-5/6">{children}</main>
    </div>
  );
};

export default MainLayout;
