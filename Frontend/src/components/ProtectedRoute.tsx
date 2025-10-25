import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../pages/Loading";
import { getCurrentUser } from "../store/user/userThunk";
import { getContents } from "../store/content/contentThunk";

const ProtectedRoute = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated === null) {
        await dispatch(getCurrentUser());
        await dispatch(getContents());
      }
    };
    fetchData();
  }, [dispatch, isAuthenticated, loading]);
  if (isAuthenticated === false) {
    return <Navigate to="/signup" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
