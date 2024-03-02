import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [SignIn, setSignIn] = useState(true);

  const handleSignInForm = () => {
    setSignIn(!SignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="backgroung image"
        />
      </div>
      <form className="bg-black relative w-3/12 text-white mx-auto right-0 left-0 top-60 p-4 opacity-80">
        <h1 className="font-bold text-center text-2xl">
          {!SignIn ? "Sign Up" : "Sign IN"}
        </h1>
        {!SignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 my-2 text-black"
          />
        )}
        <input
          type="text"
          placeholder="E-mail"
          className="w-full p-2 my-2 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 text-black"
        />
        <button className="w-full p-2 my-2 bg-red-700">
          {!SignIn ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4" onClick={handleSignInForm}>
          {!SignIn
            ? "Already Register ? Sign In Now"
            : "New to Netflix ? Sign up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
