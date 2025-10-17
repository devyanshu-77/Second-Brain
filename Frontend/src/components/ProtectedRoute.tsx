import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../pages/Loading";
import { getCurrentUser } from "../store/user/userThunk";
import { getContents } from "../store/content/contentThunk";


const ProtectedRoute = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isAuthenticated, loading, contents } = useSelector(
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
