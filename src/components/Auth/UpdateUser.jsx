import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../appwrite/user";
import authService from "../../appwrite/auth";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const user = useSelector((state) => state.authSlice?.userData);
  const { id } = useParams();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [credentials, setCredentials] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    password: "",
    oldPassword: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setFormData({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        avatar: user?.avatar,
        password: "",
        oldPassword: "",
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading({ status: true, message: "Updating..." });
    try {
      await userService.updateUser({ id, ...formData });
      if (credentials) {
        setLoading({ status: true, message: "Updating creds..." });
        if (user.email !== formData.email) {
          await authService.updateEmail({
            email: formData.email,
            password: formData.oldPassword,
          });
        }
        if (formData?.password?.length > 0) {
          await authService.updatePassword({
            password: formData.password,
            oldpassword: formData.oldPassword,
          });
        }
        toast("Updated Successfully");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <div className="bg-[#323E48] text-[#FFFFFF] flex flex-col justify-center items-center py-20 h-screen">
      <div className="lg:w-md w-full lg:my-2 px-4 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-medium">Account Update...</h1>
      </div>
      <div className="lg:w-md w-full px-4 lg:px-2">
        <form onSubmit={handleSubmit} className="mx-auto w-full">
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            />
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              id="phone"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            />
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="avatar">Avatar URL</label>
            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              id="avatar"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            />
          </div>
          {credentials && (
            <>
              <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                />
              </div>
              <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                />
              </div>
              <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
                <label htmlFor="oldPassword">Current Password</label>
                <input
                  required
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  id="oldPassword"
                  className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                />
              </div>
            </>
          )}
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            {!credentials && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCredentials(!credentials);
                }}
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Update Credentials
              </button>
            )}
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <button
              type="submit"
              disabled={loading.status}
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              {loading.status ? loading.message : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
