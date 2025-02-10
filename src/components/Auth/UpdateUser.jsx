import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../appwrite/user";

const UpdateUser = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const user = await userService.getUserById(id);
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
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
    setLoading(true);
    try {
      await userService.updateUser({ id, ...formData });
      setError("details updated");
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
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
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            id="email"
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
          {error && <h1>{error}</h1>}
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Change Password
          </button>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {loading ? "Updating...." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
