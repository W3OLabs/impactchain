import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.app);

  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoutes;
