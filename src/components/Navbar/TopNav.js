import React from "react";
import { GoBell } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";

const TopNav = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <h6 className="text-gray-700 font-bold">Dashboard</h6>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-white p-2 rounded-md">
            <GoBell className="text-gray-400 text-xl" />
          </div>
          <div className="flex items-center bg-white p-2 rounded-md">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                className="w-4 h-4 rounded-full"
                alt="user"
              />
              <h6 className="text-gray-700 text-xs font-medium">John Doe</h6>
              <RiArrowDropDownLine className="text-gray-400 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
