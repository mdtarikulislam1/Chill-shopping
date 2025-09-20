import React from "react";
import { HeartPlus, Mail, Globe, User, Search, ShoppingCart } from "lucide-react";
import { GrShop } from "react-icons/gr";

export default function Navtop() {
  return (
    <div className="hidden lg:block">
      {/* টপ বার */}
      <div className="border-b-2 border-gray-200 px-3">
        <div className="container-1400">
          <div className="flex justify-between items-center py-3">
            {/* বাম দিক */}
            <div className="flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <HeartPlus size={18} color="blue" />
                <p className="text">
                  24/7 Hours Support{" "}
                  <span className="pl-2 font-light"> | </span>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={18} color="blue" />
                <p className="text">24/7 Hours Support</p>
              </div>
            </div>

            {/* মধ্যবর্তী */}
            <div>
              <p className="text">
                Get up to 50% off using *8EA70* this coupon code
              </p>
            </div>

            {/* ডান দিক */}
            <div className="flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <Globe size={18} color="blue" />
                <p className="text">
                  Language <span className="pl-2 font-light"> | </span>
                </p>
              </div>
              <div>
                <p className="text">
                  $ USD <span className="pl-2 font-light"> | </span>
                </p>
              </div>

              {/* ড্রপডাউন */}
              <div className="dropdown dropdown-hover cursor-pointer">
                <div className="card1 flex gap-2 items-center">
                  <User size={18} color="blue" />
                  <p className="text text1">My Account</p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box w-28 z-1 p-2 shadow-sm"
                >
                  <li>
                    <a>Login</a>
                  </li>
                  <li>
                    <a>Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* লোগো অংশ */}
      <div className="py-8 container-1400 px-3">
        <div className="logo-justufy">
          <div className="flex items-center gap-2">
            <GrShop size={30} color="blue" />
            <p className="text-2xl font-extrabold">
              Chill <span className="text-blue-600">Shope</span>
            </p>
          </div>
          {/* Search */}
         <label className="relative">
          <input className="border border-blue-400 rounded-4xl py-3 px-5 min-w-90 active:border-blue-500 focus:outline-none" type="search" placeholder="I'm searching for..."></input>
          <Search className="absolute top-3.5 right-4 text-gray-300"/>
         </label>
          <div className="relative">
              <ShoppingCart />
              <p className="absolute bg-blue-700 w-full h-full rounded-full flex items-center justify-center text-[12px] text-white -top-4 left-3">22</p>
          </div>
        </div>
      </div>
    </div>
  );
}
