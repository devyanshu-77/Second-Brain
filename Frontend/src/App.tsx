import { useEffect } from "react";
import DashBorad from "./pages/DashBorad";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/userSlice";
import type { AppDispatch } from "./store/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log("REached useEffect")
    const data  = dispatch(fetchUser)
    console.log(data)
  })
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<DashBorad/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
