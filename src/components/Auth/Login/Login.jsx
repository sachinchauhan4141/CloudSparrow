import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import authService from "../../../appwrite/auth";
import { toast } from "react-toastify";

function Login() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams?.get("userId");
  const secret = urlParams?.get("secret");

  if (userId && secret) {
    authService
      .verifyEmail({ userId, secret })
      .then((response) => {
        if (response) {
          toast("Email Verified Successfully");
        }
      })
      .catch((e) => {
        toast(e?.message);
      });
  }
  return (
    <div className="lg:h-screen flex items-center justify-center px-4 py-24 lg:py-0 lg:px-0">
      <div className="bg-gray-700 rounded-2xl lg:mt-10 lg:p-10 p-6 text-white lg:h-[80vh] w-7xl">
        <h1 className="text-3xl lg:text-5xl">Welcome back...</h1>
        <div className="flex lg:mt-10 lg:min-h-[44vh] min-h-[30vh]">
          <div className="hidden lg:flex items-center justify-center border-r-2 w-full h-full px-10 py-4">
            <img
              src="/cloudsparrow-all-img/login.png"
              alt="login"
              className="w-80"
            />
          </div>
          <div className="w-full lg:px-10 flex flex-col justify-evenly">
            <LoginForm />
            <div className="flex items-center justify-center w-full">
              Create a new account?{" "}
              <Link to={"/signup"} className="ml-2">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
