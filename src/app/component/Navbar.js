"use client";

import Link from "next/link";
import React, {useState } from "react";
import { GrShop } from "react-icons/gr";
import { Menu, X,ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { ImWindows } from "react-icons/im";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const navItems = [
    {
      id: 1,
      t: "Home",
      href: "/",
    },
    {
      id: 2,
      t: "Shop",
      href: "/shop",
    },
    {
      id: 3,
      t: "About Us",
      href: "/about",
    },
    {
      id: 4,
      t: "Faq",
      href: "/faq",
    },
    {
      id: 5,
      t: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="bg-blue-50 z-10 sticky top-0 left-0 right-0  px-3">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center lg:hidden py-3">
            <div className="flex items-center gap-2">
              <GrShop size={20} color="blue" />
              <p className="text-xl font-extrabold">
                Chill <span className="text-blue-600">Shope</span>
              </p>
            </div>
            <Menu
              size={24}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="gap-40 items-center hidden lg:flex">
            <div className="dropdown dropdown-hover cursor-pointer">
              <div className="flex justify-center items-center bg-blue-700 text-gray-200 font-semibold gap-2 p-5 rounded-lg max-w-80">
                <ImWindows  size={20}/>
                <p>Brows All Categories</p>
               <ChevronDown  size={20}/>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box min-w-60 z-1 p-2 shadow-sm"
              >
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a>Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6 font-semibold">
              {
                navItems?.map(i=>(
                  <Link key={i?.id} href={i?.href}>{i?.t}</Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white min-h-screen min-w-75 max-w-96 shadow-lg z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with close icon */}
        <div className="flex justify-between items-center my-6 border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <GrShop size={18} color="blue" />
            <p className="text-lg font-extrabold">
              Chill <span className="text-blue-600">Shope</span>
            </p>
          </div>
          <X
            color="blue"
            size={24}
            className="cursor-pointer hover:text-red-500"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Sidebar */}
        <div>
          <div className="m-4">
            <div className="relative">
              {/* Search Icon */}
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />

              {/* Input */}
              <input
                type="search"
                placeholder="I'm search for..."
                className="pl-10 pr-4 py-3 w-72 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col m-4">
            {navItems?.map((i) => (
              <Link
                href={i.href}
                key={i.id}
                className={`t-s py-2 border-b ${
                  pathName === i.href
                    ? "text-blue-600 border-blue-400"
                    : "text-gray-700 border-gray-200"
                }`}
              >
                {i.t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
