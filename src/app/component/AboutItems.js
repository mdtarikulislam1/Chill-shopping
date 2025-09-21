import React from "react";
import { Headset, TruckElectric, HandCoins, Undo2 } from "lucide-react";

export default function AboutItems() {
  const items = [
    {
      id: 1,
      icon: Headset,
      h: "24/7 Hours Support",
      p: "We provide 24/7 hours customer support.",
    },
    {
      id: 2,
      icon: HandCoins,
      h: "Free Shipping",
      p: "Get free shipping for your first order.",
    },
    {
      id: 3,
      icon: TruckElectric,
      h: "Secure Payment",
      p: "We provide customer a secure payment method.",
    },
    {
      id: 4,
      icon: Undo2,
      h: "Money Return Policy",
      p: "We have money return system for customer.",
    },
  ];

  return (
    <div className="container-1400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {items.map((i) => {
        const Icon = i.icon; // আইকন কম্পোনেন্ট ধরে নিলাম
        return (
          <div
            className="flex gap-4"
            key={i.id}
          >
            {/* size / className সরাসরি Icon এ পাঠাতে হবে */}
            <Icon size={60} className="text-blue-700 font-medium" />
            <div>
              <h3 className="text-xl font-semibold">{i.h}</h3>
              <p className="text-gray-600">{i.p}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
