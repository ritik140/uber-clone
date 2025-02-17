import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1587307293162-2fb7a3ebfc75?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] items-center">
      <img
        className="w-16 ml-8 mt-8"
        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417"
        alt=""
      />
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="bg-white pb-8 py-4 px-4 rounded-3xl shadow-lg w-full max-w-md">
          <h2 className="text-[30px] font-semibold text-center">
            Get Started with Uber
          </h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 transition-transform transform hover:scale-105"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
