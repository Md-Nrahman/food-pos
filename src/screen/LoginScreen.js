import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import BgPattern from "../assets/images/bg-pattern-01.jpg";

const LoginScreen = () => {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div
          class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex justify-center items-center"
          style={{
            background: `url(${BgPattern}) center center/cover`,
            backgroundColor: "rgba(0,0,0,0.4)",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="min-h-[50%]">
            <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
              <IoFastFoodOutline className="text-white" />
              <h6 className="text-white">
                Food <span className="text-[#ff4350]">Pos</span>
              </h6>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-full flex-1 mt-8">
                <div class="mx-auto max-w-xs">
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button class="mt-5 tracking-wide font-semibold bg-[#ff4350] text-gray-100 w-full py-4 rounded-lg hover:bg-[#ff4350]/80 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      class="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span class="ml-3">Sign In</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-[#ff4350]/10 text-center hidden lg:flex">
          <div
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://idynamics.com.my/wp-content/uploads/2021/09/ILLPOS2-1024x683.png')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
