import { useEffect } from "react";
import DashBorad from "./pages/DashBorad";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/store";
import { getCurrentUser } from "./store/userSlice";
import Loading from "./pages/Loading";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
    const dispatch: AppDispatch = useDispatch();
    const { isAuthenticated, loading } = useSelector(
      (state: RootState) => state.user
    );
    console.log(isAuthenticated);
    useEffect(() => {
      async function fetchUser() {
        await dispatch(getCurrentUser());
        if (isAuthenticated) return <Navigate to="/dashboard" replace />;
      }
      fetchUser();
    }, []);
    if (loading) return <Loading />;
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<DashBorad />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
