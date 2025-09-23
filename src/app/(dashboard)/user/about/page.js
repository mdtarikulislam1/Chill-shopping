"use client";

import React from "react";
import { Asterisk } from "lucide-react";
import { KeyRound } from "lucide-react";
import AboutItems from "@/app/component/about-items/AboutItems";
import Achivements from "@/app/component/about-items/Achivements";
import Customer from "@/app/component/about-items/Customer";
import Image from "next/image";

// export const metadata = {
//   title: "Chil | About",
//   description:
//     "Discover cutting-edge tech and top-quality products at Multipurse! We offer exceptional service, reliable choices, and competitive prices for all your gadget needs.",
// };

export default function page() {
  return (
    <>
      <div className="container-1400 my-20 px-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-wrap">
              Explore the Latest & Most Delightful Items Essentials
            </h3>
            <p className="font-semibold text-lg text-gray-500 pt-4 lg:max-w-2xl">
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
                <p className="font-semibold text-sm text-gray-500 max-w-80">
                 {` We provide top-notch, carefully curated essentials to brighten
                  your little one's world.`}
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
                <p className="font-semibold text-sm text-gray-500 max-w-80">
                  We select the latest, most reliable products to your little ones.
                </p>
              </div>
            </div>
            <button className="rounded-lg bg-blue-700 py-3 px-5 font-bold text-lg text-gray-100">
              <a href="/user/shop">Explore All Items</a>
            </button>
          </div>
          <div className="relative">
           <Image
              src="https://i.postimg.cc/0NHm6Xkx/360-F-574057895-p-Harn-Rep-LEdwo-Gu-Xhq9-YZq-Pih-Ka-Bj-Uo-U.jpg"
              alt="Main product image"
              width={400}
              height={850}
              className="rounded-lg w-full h-full min-h-[350px]"
            />

            {/* Decorative Image */}
            <Image
              src="https://i.postimg.cc/DzzLw3KB/images.jpg"
              alt="Decorative image"
              width={300}
              height={200}
              className="absolute bottom-0 -left-20 rounded-lg max-h-80"
            />
          </div>
        </div>
      </div>
    <AboutItems/>
    <Achivements/>
    <Customer/>
    </>
  );
}
