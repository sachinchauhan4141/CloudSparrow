import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading({ status: true, message: "Registering..." });
      if (password === cpass) {
        const session = await authService.createAccount({
          email,
          password,
          name,
          phone,
          avatar,
        });
        if (session) {
          toast("Registered Successfully");
          setLoading({ status: true, message: "Getting info..." });
          const userData = await authService.getCurrUser();
          if (userData) {
            setLoading({ status: true, message: "Logging you in..." });
            dispatch(login(userData));
          }
          setLoading({ status: true, message: "Redirecting..." });
          navigate("/");
        }
      } else {
        toast("passwords must be same");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <div className="bg-[#323E48] text-[#FFFFFF] flex flex-col justify-center items-center py-20">
      <div className="lg:w-md lg:my-2 px-4 my-2 lg:px-0 w-full">
        <h1 className="text-3xl lg:text-4xl font-medium">Register...</h1>
      </div>
      <div className="lg:w-md px-4 lg:px-2 w-full">
        <form onSubmit={handleSubmit} className="mx-auto w-full">
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="name">Confirm Password</label>
            <input
              type="password"
              name="confirm password"
              id="confirm password"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full my-2 lg:my-4 gap-2">
            <label htmlFor="avatar">avatar</label>
            <input
              type="text"
              name="avatar"
              id="avatar"
              className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
            />
          </div>

          <div className="my-4">
            <button
              disabled={loading.status}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading.status ? loading.message : "Sign up"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center w-full">
          Already have an account ? <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
