import React, { useState } from "react";
import authService from "../../../appwrite/auth";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === cpassword) {
        if (password !== oldpassword) {
          setLoading({ status: true, message: "Updating..." });
          const response = await authService.updatePassword({
            password,
            oldpassword,
          });
          if (response) {
            toast("Updated successfully");
            setPassword("");
            setcPassword("");
            setOldPassword("");
          }
        } else {
          toast("Use a different password");
          setPassword("");
        }
      } else {
        toast("Password and confirm password must be same");
        setPassword("");
        setcPassword("");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
      setPassword("");
      setcPassword("");
      setOldPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="password">New Password</label>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="cpassword">Confirm New Password</label>
        <input
          required
          type="password"
          name="cpassword"
          value={cpassword}
          onChange={(e) => setcPassword(e.target.value)}
          id="password"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <label htmlFor="oldpassword">Current Password</label>
        <input
          required
          type="password"
          name="oldpassword"
          value={oldpassword}
          onChange={(e) => setOldPassword(e.target.value)}
          id="oldpassword"
          className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        />
      </div>
      <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
        <button
          type="submit"
          disabled={loading.status}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {loading.status ? loading.message : "Update"}
        </button>
      </div>
    </form>
  );
};

export default UpdatePassword;
