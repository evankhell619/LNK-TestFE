import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-red-500 mb-8">Fill the form</p>
        {children}
        <p className="text-center text-sm mt-5">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Sign Up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
