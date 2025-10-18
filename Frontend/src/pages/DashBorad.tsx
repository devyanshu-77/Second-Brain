import React from "react";
import Main from "../components/MainContent";
import SideBar from "../components/SideBar";

const DashBorad = () => {
  return (
    <div className="flex">
      <SideBar />
      <Main />
    </div>
  );
};

export default DashBorad;
