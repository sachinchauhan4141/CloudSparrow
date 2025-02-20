import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.authSlice?.status ?? false);

  useEffect(() => {
    if (authStatus === null) return; // Wait until authStatus is resolved

    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/dashboard");
    } else {
      setLoader(false);
    }
  }, [authStatus, authentication, navigate]);

  return loader ? (
    <div className="flex items-center justify-center h-screen w-full">
      <h1 className="text-3xl">Authenticating...</h1>
    </div>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
