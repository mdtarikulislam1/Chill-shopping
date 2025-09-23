"use client";

import React from "react";
import { Asterisk } from "lucide-react";
import { KeyRound } from "lucide-react";
import AboutItems from "@/app/component/about-items/AboutItems";
import Achivements from "@/app/component/about-items/Achivements";
import Customer from "@/app/component/about-items/Customer";

// export const metadata = {
//   title: "Chil | About",
//   description:
//     "Discover cutting-edge tech and top-quality products at Multipurse! We offer exceptional service, reliable choices, and competitive prices for all your gadget needs.",
// };

export default function page() {
  return (
    <>
      <div className="container-1400 my-20 px-4">
        <div className="flex flex-col justify-center items-center gap-5 lg:flex-row">
          <div>
            <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Explore the Latest & Most <br /> Delightful Items Essentials
            </h3>
            <p className="font-semibold text-lg text-gray-500 pt-4 text-wrap">
              Discover cutting-edge tech and top-quality products at Multipurse!
              We offer exceptional service, reliable choices, and competitive
              prices for all your gadget needs.
            </p>

            {/* 1 */}
            <div className="flex gap-5 my-10">
              <div className="font-bold text-8xl bg-amber-300 min-w-20 h-20 rounded-full flex justify-center items-center">
                {" "}
                <Asterisk size={50} />
              </div>
              <div>
                <h4 className="font-semibold text-2xl">
                  100% Quality Products
                </h4>
                <p className="font-semibold text-sm text-gray-500">
                  We provide top-notch, carefully curated essentials to brighten
                  your little one's world.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex gap-5 my-10">
              <div className="font-bold text-8xl bg-amber-500 min-w-20 h-20 rounded-full flex justify-center items-center">
                {" "}
                <KeyRound size={50} />
              </div>
              <div>
                <h4 className="font-semibold text-2xl">
                  100% Quality Products
                </h4>
                <p className="font-semibold text-sm text-gray-500">
                  We provide top-notch, carefully curated essentials to brighten
                  your little one's world.
                </p>
              </div>
            </div>
            <button className="rounded-lg bg-blue-700 py-3 px-5 font-bold text-lg text-gray-100">
              <a href="/user/shop">Explore All Items</a>
            </button>
          </div>
          <div className="relative">
            <img
              className="min-h-[450px] rounded-lg"
              src="https://i.postimg.cc/0NHm6Xkx/360-F-574057895-p-Harn-Rep-LEdwo-Gu-Xhq9-YZq-Pih-Ka-Bj-Uo-U.jpg"
            ></img>
            <img
              className="absolute bottom-0 -left-30 rounded-lg min-h-80"
              src="https://i.postimg.cc/DzzLw3KB/images.jpg"
            ></img>
          </div>
        </div>
      </div>
    <AboutItems/>
    <Achivements/>
    <Customer/>
    </>
  );
}
