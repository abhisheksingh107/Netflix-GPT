import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    console.log("Toggling form, current state:", isSignInForm);
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-black bg-opacity-90  bg-custom-dark-overlay">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="netflix background"
        />
      </div>
      <form id="name" name="name" className="w-[425px] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 z-10">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="mt-4 p-2 w-full bg-gray-600 opacity-50"
        ></input>}
        <input
          type="text"
          placeholder="Email Or mobile number"
          className="mt-4 p-2 w-full bg-gray-600 opacity-50"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="mt-4 p-2 w-full bg-gray-600 opacity-50"
        ></input>
        <button className="p-2 mt-6 w-full bg-red-600 rounded-lg ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex mt-6 p-2 font-semibold">
          <p className="text-gray-400">{isSignInForm ? "New to Netflix?" : "Already registered."}</p>
          <p className="px-1 hover:underline cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now" : " Sign In Now."}
          </p>
        </div>
        <div className="flex text-sm mt-8">
          <p className="text-gray-400 p-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-400 cursor-pointer pt-2 ml-1 hover:underline">
              Learn more.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
