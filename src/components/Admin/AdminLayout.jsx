import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const adminStatus = useSelector((state) => state.authSlice?.userData?.admin);

  useEffect(() => {
    if (authentication && adminStatus !== authentication) {
      navigate("/");
    } else if (!authentication && adminStatus !== authentication) {
      navigate("/dashboard");
    }
    setLoader(false);
  }, [navigate, authentication, adminStatus]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default AdminLayout;
