import Link from "next/link";
import React from "react";
import { MailCheck } from 'lucide-react';

export default function Footer() {
  const items = [
    {
      id: 1,
      t: "About Us",
      href: "",
    },
    {
      id: 2,
      t: "Contact Us",
      href: "",
    },
    {
      id: 3,
      t: "Privacy Policy",
      href: "",
    },
    {
      id: 4,
      t: "Faqs",
      href: "",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200">
      {/* content */}

      <div className="flex flex-col xl:flex-row gap-14 container-1400 py-20 px-4">
        <div className="flex flex-col md:flex-row gap-14">
          <div>
            <p className="max-w-[550px] text-gray-600 text-lg">
              At Manti, we offer the latest electronics at unbeatable prices.
              From smartphones to home entertainment, our curated selection
              guarantees quality and innovation. Enjoy expert advice, fast
              shipping, and exceptional service—stay connected with Manti!
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-800 pb-2 text-nowrap">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {items?.map((i) => (
                <Link
                  className="text-sm font-semibold text-gray-600 text-nowrap"
                  key={i?.id}
                  href={i?.href}
                >
                  {i?.t}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-14">
          <div>
            <h4 className="text-xl font-bold text-gray-800 pb-2">Contact Us</h4>
            <ul className="text-sm font-semibold text-gray-600 flex flex-col gap-2">
              <li>+001330111785</li>
              <li>mdtorikul908765@gmail.com</li>
              <li>Bahapur,sapahar,naogaon,Rajshahi,Bangladesh</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-800 pb-2">
              Subscribe Us
            </h4>
            <p className="text-sm font-semibold text-gray-600 flex flex-col gap-2">
              Subscribe to our newsletter for the latest launches, exclusive
              deals, and tech tips—straight to your inbox!
            </p>
            <label className="relative">
              <input className="bg-white py-4 rounded-4xl px-5 mt-4 w-full" type="email" placeholder="Enter Your email"></input>
              <button className="flex items-center justify-center gap-4 bg-blue-600 text-white py-3 px-3 font-semibold text-lg absolute rounded-4xl -top-4 right-0">
                <span>Subscribe</span>
                  <MailCheck />
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
