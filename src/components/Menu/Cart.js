import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Burger from "../../assets/images/foods/beef-burger.avif";
import { GiMoneyStack } from "react-icons/gi";
import { CiCreditCard2 } from "react-icons/ci";
import { IoWallet } from "react-icons/io5";

const Cart = () => {
  return (
    <div className="px-5 w-[500px] h-full">
      <div className="bg-white h-full rounded-md p-4 overflow-y-auto">
        <div className="flex space-x-4 my-2">
          <h6>Customer Information</h6>
          <IoIosInformationCircleOutline className="text-gray-400 text-xl" />
        </div>

        <div className="bg-[#f7f7f9] p-3 rounded-md my-2">
          <h5 className="text-gray-400  text-xs">Customer Name</h5>
          <h5 className="text-gray-700 font-bold text-sm">Md Naimur Rahman</h5>
        </div>

        <div className="bg-[#f7f7f9] p-3 rounded-md my-2">
          <h5 className="text-gray-400  text-xs">Customer Name</h5>
          <h5 className="text-gray-700 font-bold text-sm">Md Naimur Rahman</h5>
        </div>

        <div className="my-5">
          <h6>Current Order</h6>
        </div>

        <div className="bg-[#f7f7f9] p-3 rounded-md my-2">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <img
                src={Burger}
                alt=""
                className="h-10 w-10 rounded-full object-center"
              />
              <div>
                <h5 className="text-gray-700 font-bold text-sm">Beef Burger</h5>
                <h5 className="text-green-600 font-bold text-xs">৳ 274</h5>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 bg-white rounded-full p-1">
                <div className="h-5 w-5 flex justify-center items-center bg-[#ff4350] rounded-full">
                  <h5 className="text-white font-bold">-</h5>
                </div>
                <input
                  type="number"
                  className="w-10 h-5 py-2 px-3 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="h-5 w-5 flex justify-center items-center bg-[#ff4350] rounded-full">
                  <h5 className="text-white font-bold">+</h5>
                </div>
              </div>
              <h5 className="text-gray-400 font-bold text-xs">Remove</h5>
            </div>
          </div>
        </div>

        <div className="bg-[#f7f7f9] p-3 rounded-md my-2">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <img
                src={Burger}
                alt=""
                className="h-10 w-10 rounded-full object-center"
              />
              <div>
                <h5 className="text-gray-700 font-bold text-sm">Beef Burger</h5>
                <h5 className="text-green-600 font-bold text-xs">৳ 274</h5>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 bg-white rounded-full p-1">
                <div className="h-5 w-5 flex justify-center items-center bg-[#ff4350] rounded-full">
                  <h5 className="text-white font-bold">-</h5>
                </div>
                <input
                  type="number"
                  className="w-10 h-5 py-2 px-3 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="h-5 w-5 flex justify-center items-center bg-[#ff4350] rounded-full">
                  <h5 className="text-white font-bold">+</h5>
                </div>
              </div>
              <h5 className="text-gray-400 font-bold text-xs">Remove</h5>
            </div>
          </div>
        </div>

        <div className="bg-[#f7f7f9] p-3 rounded-md my-2 space-y-3">
          <div className="flex justify-between items-center">
            <h5 className="text-gray-400  text-xs">Sub Total</h5>
            <h5 className="text-gray-700 font-bold text-xs">৳ 282</h5>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h5 className="text-gray-400  text-xs">Tax 10%(VAT included)</h5>
            <h5 className="text-gray-700 font-bold text-xs">৳ 28</h5>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h5 className="text-gray-400  text-xs">Discount 20%</h5>
            <h5 className="text-gray-700 font-bold text-xs">- ৳ 56</h5>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h5 className="text-[#ff4350]  text-xs">Total</h5>
            <h5 className="text-green-600 font-bold text-xs">৳ 274</h5>
          </div>
        </div>

        <div className="my-5">
          <h6>Payment Method</h6>
        </div>

        <div className="grid grid-cols-3 gap-x-4">
          <div className="space-y-2">
            <div className="p-4 border hover:text-white hover:bg-[#ff4350] text-gray-700 flex justify-center items-center rounded-md">
              <GiMoneyStack className="text-4xl" />
            </div>
            <h5 className="text-center text-gray-700 font-bold text-xs">
              Cash
            </h5>
          </div>

          <div className="space-y-2">
            <div className="p-4 border hover:text-white hover:bg-[#ff4350] text-gray-700 flex justify-center items-center rounded-md">
              <CiCreditCard2 className="text-4xl " />
            </div>
            <h5 className="text-center text-gray-700 font-bold text-xs">
              Card
            </h5>
          </div>

          <div className="space-y-2">
            <div className="p-4 border hover:text-white hover:bg-[#ff4350] text-gray-700 flex justify-center items-center rounded-md">
              <IoWallet className="text-4xl" />
            </div>
            <h5 className="text-center text-gray-700 font-bold text-xs">
              E-Wallet
            </h5>
          </div>
        </div>
        <button className="col-span-3 bg-[#ff4350] text-white rounded-md py-2 my-2 w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
