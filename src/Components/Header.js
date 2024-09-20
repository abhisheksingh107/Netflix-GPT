import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  Netflix_Logo,
  SUPPORTED_LANGUAGES,
  User_Icon,
} from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/UserSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changelanguage } from "../Utils/langSlice";

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
        const { uid, email, displayName } = user;
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="flex justify-between absolute w-full bg-gradient-to-b from-black px-5 z-10">
      <img
        className="w-36 ml-32 mt-6  font-bold"
        src={Netflix_Logo}
        alt="Netflix Logo"
      />

      {user && (
        <div className="text-white flex mt-6">
          {showGptSearch && (
            <div className="text-base py-1">
              <select className="bg-black" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button className="px-7" onClick={handleGptSearchClick}>
            {showGptSearch ? (
              <div className="pb-2">MainPage</div>
            ) : (
              <>
                <i className="pb-3 px-2 fa-solid fa-magnifying-glass"></i>
                  GPT Search
              </>
            )}
          </button>
          <div className="flex px-2 ">
            <img className="w-8 h-7" src={User_Icon} alt="User Icons" />
            <button
              onClick={handleSignOut}
              className="pb-3 pl-2 font-Semibold text-white hover:underline"
            >
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
