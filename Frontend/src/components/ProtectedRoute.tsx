import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../pages/Loading";
import { getContents, getCurrentUser } from "../store/user/userThunk";


const ProtectedRoute = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (isAuthenticated === null && !loading) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuthenticated, loading]);

  if (isAuthenticated === null) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
