import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {
  IoRestaurantOutline,
  IoHomeOutline,
  IoClipboardOutline,
  IoChatbubbleEllipsesOutline,
  IoFastFoodOutline,
} from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import TossedSalad from "../../assets/images/tossed-salad.png";

const SideNav = () => {
  return (
    <div className="p-5 w-[320px] min-h-screen">
      <div className="bg-white h-[calc(100vh-2.5rem)] flex flex-col justify-between rounded-md p-2">
        <div className="flex items-center justify-center space-x-1 text-2xl font-bold py-5">
          <IoFastFoodOutline className="text-gray-700" />
          <h6 className="text-gray-700">
            Food <span className="text-[#ff4350]">Pos</span>
          </h6>
        </div>

        <div className="flex flex-col space-y-2 text-gray-500 px-2 font-medium">
          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-[#ff4350]/10 hover:text-[#ff4350] cursor-pointer">
            <IoHomeOutline />
            <h6>Dashboard</h6>
          </div>

          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-[#ff4350]/10 hover:text-[#ff4350] cursor-pointer">
            <IoRestaurantOutline />
            <h6>Menu</h6>
          </div>

          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-[#ff4350]/10 hover:text-[#ff4350] cursor-pointer">
            <IoClipboardOutline />
            <h6>Orders</h6>
          </div>

          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-[#ff4350]/10 hover:text-[#ff4350] cursor-pointer">
            <PiUsersThree />
            <h6>Customers</h6>
          </div>

          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-[#ff4350]/10 hover:text-[#ff4350] cursor-pointer">
            <GoGraph />
            <h6>Analytics</h6>
          </div>

          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-[#ff4350]/10 hover:text-[#ff4350] cursor-pointer">
            <IoChatbubbleEllipsesOutline />
            <h6>Chat</h6>
          </div>

          <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-[#ff4350]/10 hover:text-[#ff4350] cursor-pointer">
            <CiSettings />
            <h6>Settings</h6>
          </div>
        </div>

        <div className="bg-[#ff4350]/10 h-[150px] w-full rounded-lg">
          <img className="-mt-8 mx-auto w-2/3" src={TossedSalad} alt="" />
          <button className="bg-black block mx-auto px-3 py-2 rounded-md mt-8 text-white font-medium">
            Go to Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
