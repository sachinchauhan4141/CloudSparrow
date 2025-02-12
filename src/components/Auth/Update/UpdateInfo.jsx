import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../../appwrite/user";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UpdateInfo = () => {
  const user = useSelector((state) => state.authSlice?.userData);
  const { id } = useParams();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    avatar: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setFormData({
        name: user?.name,
        phone: user?.phone,
        avatar: user?.avatar,
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
      toast("Updated Successfully");
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:mx-auto w-full">
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
  );
};

export default UpdateInfo;
