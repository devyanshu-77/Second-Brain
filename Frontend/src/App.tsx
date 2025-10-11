import Main from "./components/MainContent";
import SideBar from "./components/SideBar";
import DashBorad from "./pages/DashBorad";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
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
