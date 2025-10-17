import React from "react";
import logo from "/Logo.svg";
import SideBarItem from "./SideBarItem";
import ShareIcon from "../icons/ShareIcon";

const SideBar = () => {
  return (
    <div className="h-screen w-[20%] bg-white pt-2">
      <div className="w-full h-15 flex items-center gap-2">
        <img className="h-full" src={logo} alt="logo" />
        <p className="text-xl font-semibold">Second Brain</p>
      </div>
      <div className="w-full mt-5 flex flex-col gap-3">
        <SideBarItem text="X" logo={<ShareIcon size="sm" color="dark" />} />
        <SideBarItem text="YouTube" logo={<ShareIcon size="sm" color="dark" />} />
      </div>
    </div>
  );
};

export default SideBar;
