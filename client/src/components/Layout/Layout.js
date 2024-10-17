import React from "react";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />

      <Navbar />
      <div className="content p-4">{children}</div>
    </>
  );
};

export default Layout;
