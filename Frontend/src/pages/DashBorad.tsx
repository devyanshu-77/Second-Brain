import React, { useState } from "react";
import Main from "../components/MainContent";
import SideBar from "../components/SideBar";
import ShowXPost from "../components/ShowXPost";

const DashBorad = () => {
  const [xpost, setXPost] = useState(false);
  function handleXToggle() {
    console.log("Reached x post ", xpost)
    setXPost((prev: boolean) => !prev);
  }
  return (
    <div className="flex">
      <SideBar setXPost={handleXToggle}  />
      {!xpost && <Main />}
      {xpost && <ShowXPost />}
    </div>
  );
};

export default DashBorad;
