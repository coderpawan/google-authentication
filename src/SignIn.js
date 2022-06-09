import React from "react";
import { SignInGoogle } from "./Firebase/firebase";
import Logo from "./logo.png";
import { AiOutlineGooglePlus } from "react-icons/ai";

const SignIn = () => {
  return (
    <div>
      <div className=" bg-[url('./mountain.jpg')] h-[100vh]">
        <img src={Logo} alt="" className="h-28 ml-12 pt-8" />
        <div
          className="flex bg-white opacity-75 md:w-[50%] w-[80%] lg:w-[20%] px-6 py-4 rounded-2xl relative lg:left-[35%] md:left-[20%] left-[10%] top-[20vh] cursor-pointer"
          onClick={SignInGoogle}
        >
          <AiOutlineGooglePlus className="text-red-600 text-3xl font-bold mr-3" />
          <div className="text-red-600 text-2xl font-bold">
            SignIn with Google
          </div>
        </div>
        <div class="absolute top-0 right-0 h-12 w-18 p-4">
          <button class="js-change-theme focus:outline-none">🌙</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
