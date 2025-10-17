import React, { useEffect } from "react";
import Main from "../components/MainContent";
import SideBar from "../components/SideBar";
import { getContents } from "../store/content/contentThunk";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
const DashBorad = () => {
  
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
      function fetAllContents() {
        dispatch(getContents());
      }
      fetAllContents();
    }, [dispatch]);
  return (
    <div className="flex">
      <SideBar />
      <Main />
    </div>
  );
};

export default DashBorad;
