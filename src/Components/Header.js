import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between absolute w-full bg-gradient-to-b from-black px-7 z-10">
      <img
        className="w-36 ml-32 mt-4 font-bold"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex mt-4">
          <img className="w-8 h-8" src={user.photoURL} alt="User Icons" />
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
