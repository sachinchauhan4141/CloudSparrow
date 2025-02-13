import React from "react";
import { Link } from "react-router-dom";

function NotFoundAdmin() {
  return (
    <div className="text-center flex flex-col gap-6 justify-center items-center h-screen bg-[radial-gradient(circle_at_bottom,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]">
      <h1 className="text-5xl lg:text-9xl font-bold">
        NOT <span className="text-red-500">FOUND</span>
      </h1>
      <h1 className="text-2xl font-bold">you dont have
        permission to access - contact admin
      </h1>
      <Link
        to={"/"}
        className="px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md border cursor-pointer"
      >
        Go To Home
      </Link>
    </div>
  );
}

export default NotFoundAdmin;
