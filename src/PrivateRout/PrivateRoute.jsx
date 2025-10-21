import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import { RingLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <RingLoader color="#da0000" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
