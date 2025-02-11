import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../appwrite/user";
import authService from "../../appwrite/auth";
import { useSelector } from "react-redux";

const UpdateUser = () => {
  const user = useSelector((state) => state.authSlice?.userData);
  const { id } = useParams();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [credentials, setCredentials] = useState(false);
  const [error, setError] = useState("");
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
    setError("");
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
      }
      setLoading({ status: true, message: "Updated Successfully..." });
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md max-h-[70vh] overflow-y-scroll no-scrollbar">
        <h2 className="text-2xl font-bold mb-4">Update User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            id="name"
            className="w-full p-2 border rounded"
          />

          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            id="phone"
            className="w-full p-2 border rounded"
          />

          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700"
          >
            Avatar URL
          </label>
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Avatar URL"
            id="avatar"
            className="w-full p-2 border rounded"
          />

          {credentials && (
            <>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                id="email"
                className="w-full p-2 border rounded"
              />

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="New Password"
                id="password"
                className="w-full p-2 border rounded"
              />

              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                required
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Your Password"
                id="oldPassword"
                className="w-full p-2 border rounded"
              />
            </>
          )}

          {error && <h1>{error}</h1>}

          {!credentials && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setCredentials(!credentials);
              }}
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Change Credentials
            </button>
          )}
          <button
            type="submit"
            disabled={loading.status}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {loading.status ? loading.message : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
