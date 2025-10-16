import { useEffect } from "react";
import DashBorad from "./pages/DashBorad";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashBorad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
