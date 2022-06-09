import React from "react";
import { signOut } from "firebase/auth";
import { authentication } from "./Firebase/firebase";
import Logo from "./logo.png";
import { MdEmail } from "react-icons/md";

const Home = () => {
  const Logout = () => {
    signOut(authentication);
    localStorage.clear("username");
    localStorage.clear("email");
    localStorage.clear("profilePic");
  };
  const user = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const profilePic = localStorage.getItem("profilePic");

  return (
    <div className=" bg-[url('./mountain.jpg')] pb-16 lg:h-[100vh]">
      <img src={Logo} alt="" className="h-28 ml-12 pt-8" />
      <div class="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-20">
        <div
          id="profile"
          class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div class="p-4 md:p-12 text-center lg:text-left">
            <img
              src={profilePic}
              alt=""
              class="block lg:hidden md:mt-5 rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            />

            <h1 class="text-3xl font-bold pt-8 lg:pt-0">{user}</h1>
            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <div class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <MdEmail className="text-green-700 text-xl mr-3" />
              <div className="">{email}</div>
            </div>

            <p class="pt-8 text-sm">
              Hello guys,
              <br /> This is my task 2 for the selection process in the tech
              team of E-cell
            </p>

            <div class="pt-12 pb-8">
              <button
                onClick={Logout}
                class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-2/5">
          <img
            src={profilePic}
            alt="profilepic"
            class="rounded-none lg:rounded-r-lg hidden shadow-2xl  lg:block w-[80%]"
          />
        </div>
        <div className="bg-white text-lg font-bold text-red-600 px-4 py-2 opacity-75 rounded-xl w-[70%]  relative left-[5%] md:left-[10%] lg:left-[20%] mt-8">
          Please refresh the page if profile is not shown
        </div>
        <div class="absolute top-0 right-0 h-12 w-18 p-4">
          <button class="js-change-theme focus:outline-none">🌙</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
