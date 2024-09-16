import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Netflix_BgPhoto } from "../Utils/Constant";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errMessage, seterrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(email.current.value, password.current.value);
    seterrMessage(message);
    if (message) return;

    // Sign In Sign Up Logic

    if (!isSignInForm) {
      // Sign Up Login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // Update with the User's Profile

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              seterrMessage(error.message);
            });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage("Creditials doesn't match");
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Netflix_BgPhoto} alt="netflix background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        id="name"
        name="name"
        className="w-[425px] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70 z-10"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Sign Up Page Form */}

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="mt-4 p-2 w-full bg-gray-600 opacity-50"
          ></input>
        )}

        {/* Sign in Page Form */}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="mt-4 p-2 w-full bg-gray-600 opacity-50"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="mt-4 p-2 w-full bg-gray-600 opacity-50"
        ></input>

        <p className="text-red-600 p-2 m-2 text-lg font-bold">{errMessage}</p>

        <button
          className="p-2 mt-6 w-full bg-red-600 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex mt-6 p-2 font-semibold">
          <p className="text-gray-400">
            {isSignInForm ? "New to Netflix?" : "Already registered."}
          </p>
          <p
            className="px-1 hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
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
