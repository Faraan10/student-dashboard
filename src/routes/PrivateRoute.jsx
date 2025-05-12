import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ user }) => {
  return <div>{user ? <Outlet /> : <Navigate to="/login" replace />}</div>;
};

export default PrivateRoute;
