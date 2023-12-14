import React from "react";
import SideNav from "../components/Navbar/SideNav";
import TopNav from "../components/Navbar/TopNav";
import Cart from "../components/Menu/Cart";
import MenuBanner from "../assets/images/food-cover.jpg";
import Burger from "../assets/images/categories/burger.png";
import Dessert from "../assets/images/categories/dessert.webp";
import Drink from "../assets/images/categories/drink.webp";
import Pasta from "../assets/images/categories/pasta.webp";
import Pizza from "../assets/images/categories/pizza.png";
import Salad from "../assets/images/categories/salad.png";
import Snacks from "../assets/images/categories/snacks.webp";

import Biriyani from "../assets/images/foods/biriyani.jpeg";
import BeefBurger from "../assets/images/foods/beef-burger.avif";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MenuScreen = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="w-[calc(100%-320px)] h-screen">
        <TopNav />
        <div className="flex h-[calc(100vh-20%)]">
          <div className="w-full h-full overflow-y-auto overflow-x-hidden">
            <div
              className="w-full relative rounded-xl"
              style={{
                background: `url(${MenuBanner}) no-repeat center/cover`,
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "14rem",
              }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-0 px-5 py-3 w-1/2 space-y-4">
                <h4 className="text-white font-bold text-xl">
                  Healthy Food is the key to your good mood
                </h4>
                <p className="text-white text-sm">
                  For all Biriyani Lovers get 100BDT off all Biryani based meals
                </p>
                <button className="bg-[#ff4350] px-3 py-2 rounded-md mt-3 text-white font-medium">
                  Order Now
                </button>
              </div>
            </div>

            <div className="">
              <h3 className="text-gray-700 font-bold text-xl px-5 py-3">
                Choose Category
              </h3>

              <div className="flex gap-x-2">
                <Swiper
                  slidesPerView={6}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  // modules={[Pagination]}
                  // className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center group p-3  rounded-md hover:bg-[#ff4350] bg-white">
                      <div className="p-2 rounded-full bg-white">
                        <img src={Snacks} alt="" className="h-10" />
                      </div>
                      <h6 className="text-center group-hover:text-white text-gray-700 font-bold mt-2">
                        Snacks
                      </h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center group p-3  rounded-md hover:bg-[#ff4350] bg-white">
                      <div className="p-2 rounded-full bg-white">
                        <img src={Drink} alt="" className="h-10" />
                      </div>
                      <h6 className="text-center group-hover:text-white text-gray-700 font-bold mt-2">
                        Drink
                      </h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center group p-3  rounded-md hover:bg-[#ff4350] bg-white">
                      <div className="p-2 rounded-full bg-white">
                        <img src={Burger} alt="" className="h-10" />
                      </div>
                      <h6 className="text-center group-hover:text-white text-gray-700 font-bold mt-2">
                        Burger
                      </h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center group p-3  rounded-md hover:bg-[#ff4350] bg-white">
                      <div className="p-2 rounded-full bg-white">
                        <img src={Dessert} alt="" className="h-10" />
                      </div>
                      <h6 className="text-center group-hover:text-white text-gray-700 font-bold mt-2">
                        Dessert
                      </h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center group p-3  rounded-md hover:bg-[#ff4350] bg-white">
                      <div className="p-2 rounded-full bg-white">
                        <img src={Pasta} alt="" className="h-10" />
                      </div>
                      <h6 className="text-center group-hover:text-white text-gray-700 font-bold mt-2">
                        Pasta
                      </h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center group p-3  rounded-md hover:bg-[#ff4350] bg-white">
                      <div className="p-2 rounded-full bg-white">
                        <img src={Pizza} alt="" className="h-10" />
                      </div>
                      <h6 className="text-center group-hover:text-white text-gray-700 font-bold mt-2">
                        Pizza
                      </h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center group p-3  rounded-md hover:bg-[#ff4350] bg-white">
                      <div className="p-2 rounded-full bg-white">
                        <img src={Salad} alt="" className="h-10" />
                      </div>
                      <h6 className="text-center group-hover:text-white text-gray-700 font-bold mt-2">
                        Salad
                      </h6>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-gray-700 font-bold text-xl px-5 py-3">
                Special Menu All Items
              </h3>

              <div className="grid grid-cols-4 gap-x-2 gap-y-3">
                <div className="flex flex-col  justify-center group rounded-md bg-white p-2">
                  <div className=" rounded-md bg-white">
                    <img src={Biriyani} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="">
                    <h6 className="group-hover:text-white text-gray-700 font-bold mt-2">
                      Biriyani
                    </h6>
                    <p className="text-gray-500 text-xs">Description</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-900 text-sm ">
                        <span className="text-[#ff4350]">৳</span> 200.50
                      </p>
                      <button className="bg-[#ff4350] px-2 py-1 rounded-lg text-white text-xs">
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  justify-center group rounded-md bg-white p-2">
                  <div className=" rounded-md bg-white">
                    <img src={Biriyani} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="">
                    <h6 className="group-hover:text-white text-gray-700 font-bold mt-2">
                      Biriyani
                    </h6>
                    <p className="text-gray-500 text-xs">Description</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-900 text-sm ">
                        <span className="text-[#ff4350]">৳</span> 200.50
                      </p>
                      <button className="bg-[#ff4350] px-2 py-1 rounded-lg text-white text-xs">
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  justify-center group rounded-md bg-white p-2">
                  <div className=" rounded-md bg-white">
                    <img src={Biriyani} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="">
                    <h6 className="group-hover:text-white text-gray-700 font-bold mt-2">
                      Biriyani
                    </h6>
                    <p className="text-gray-500 text-xs">Description</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-900 text-sm ">
                        <span className="text-[#ff4350]">৳</span> 200.50
                      </p>
                      <button className="bg-[#ff4350] px-2 py-1 rounded-lg text-white text-xs">
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  justify-center group rounded-md bg-white p-2">
                  <div className=" rounded-md bg-white">
                    <img src={Biriyani} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="">
                    <h6 className="group-hover:text-white text-gray-700 font-bold mt-2">
                      Biriyani
                    </h6>
                    <p className="text-gray-500 text-xs">Description</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-900 text-sm ">
                        <span className="text-[#ff4350]">৳</span> 200.50
                      </p>
                      <button className="bg-[#ff4350] px-2 py-1 rounded-lg text-white text-xs">
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  justify-center group rounded-md bg-white p-2">
                  <div className=" rounded-md bg-white">
                    <img src={Biriyani} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="">
                    <h6 className="group-hover:text-white text-gray-700 font-bold mt-2">
                      Biriyani
                    </h6>
                    <p className="text-gray-500 text-xs">Description</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-900 text-sm ">
                        <span className="text-[#ff4350]">৳</span> 200.50
                      </p>
                      <button className="bg-[#ff4350] px-2 py-1 rounded-lg text-white text-xs">
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  justify-center group rounded-md bg-white p-2">
                  <div className=" rounded-md bg-white">
                    <img src={Biriyani} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="">
                    <h6 className="group-hover:text-white text-gray-700 font-bold mt-2">
                      Biriyani
                    </h6>
                    <p className="text-gray-500 text-xs">Description</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-900 text-sm ">
                        <span className="text-[#ff4350]">৳</span> 200.50
                      </p>
                      <button className="bg-[#ff4350] px-2 py-1 rounded-lg text-white text-xs">
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  justify-center group rounded-md bg-white p-2">
                  <div className=" rounded-md bg-white">
                    <img src={Biriyani} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="">
                    <h6 className="group-hover:text-white text-gray-700 font-bold mt-2">
                      Biriyani
                    </h6>
                    <p className="text-gray-500 text-xs">Description</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-900 text-sm ">
                        <span className="text-[#ff4350]">৳</span> 200.50
                      </p>
                      <button className="bg-[#ff4350] px-2 py-1 rounded-lg text-white text-xs">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Cart />
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
