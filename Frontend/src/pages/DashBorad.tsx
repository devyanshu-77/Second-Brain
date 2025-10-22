import React, { useState } from "react";
import Main from "../components/MainContent";
import SideBar from "../components/SideBar";
import ShowXPost from "../components/ShowXPost";
import ShowYTPost from "../components/ShowYTPost";

const DashBorad = () => {
  const [xPost, setXPost] = useState(false);
  const [ytPost, setYTPost] = useState(false);
  function handleXToggle() {
    console.log("X post inside");
    if (ytPost) {
      setYTPost((prev) => !prev);
    }
    console.log("xPost post boolean before - ", ytPost);
    setXPost((prev: boolean) => !prev);
    console.log("xPost post boolean after - ", ytPost);
  }
  function handleYToggle() {
    console.log("Yt post inside");
    if (xPost) {
      setXPost((prev) => !prev);
    }
    console.log("Youtube post boolean before - ", ytPost);
    setYTPost((prev: boolean) => !prev);
    console.log("Youtube post boolean after - ", ytPost);
  }
  return (
    <div className="flex">
      <SideBar
        setXPost={handleXToggle}
        setYTPost={handleYToggle}
      />
      {!xPost && !ytPost && <Main />}
      {xPost && <ShowXPost setXPost={handleXToggle} />}
      {ytPost && <ShowYTPost setYTPost={handleYToggle} />}
    </div>
  );
};

export default DashBorad;
