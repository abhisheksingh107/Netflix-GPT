import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import {Netflix_Logo, User_Icon} from "../Utils/Constant"
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/UserSlice";

function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

    });
  }, [dispatch, navigate]);

  return (
    <div className="flex justify-between absolute w-full bg-gradient-to-b from-black px-7 z-10">
      <img
        className="w-36 ml-32 mt-6 font-bold"
        src={Netflix_Logo}
        alt="Netflix Logo"
      />


      {user && (
        <div className="flex mt-5 bg-black">
          <img className="w-8 h-8" src = {User_Icon} alt="User Icons" />
          <button
            onClick={handleSignOut}
            className="pb-4 pl-2 font-bold text-white hover:underline"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
