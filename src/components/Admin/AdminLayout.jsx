import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import userService from "../../appwrite/user";
import { toast } from "react-toastify";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const getAdminStatus = async () => {
    try {
      const currUser = await authService.getCurrUser();
      const userData = await userService.getUserById(currUser?.$id);
      if (!userData.admin) {
        navigate("/notadmin");
      }
      setLoader(false);
    } catch (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    getAdminStatus();
  }, [navigate]);

  return loader ? (
    <div className="flex items-center justify-center h-screen w-full">
      <h1 className="text-3xl">Authenticating...</h1>
    </div>
  ) : (
    <>{children}</>
  );
};

export default AdminLayout;
