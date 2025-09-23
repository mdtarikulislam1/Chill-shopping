"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Achivements() {
  const countItems = [
    { value: 100, label: "Active User", bg: "bg-blue-50", suffix: "+" },
    { value: 900, label: "DAILY TRANSACTION", bg: "bg-amber-50", suffix: "+" },
    { value: 300, label: "ORIGINAL PRODUCTS", bg: "bg-cyan-50", suffix: "+" },
    { value: 100, label: "SECURITY ENSURE", bg: "bg-emerald-50", suffix: "%" },
  ];

  return (
    <div className="container-1400 my-20 px-4 flex flex-col lg:flex-row justify-center gap-5">
      <img
        src="https://i.postimg.cc/mDx7xZSF/351d9da0eee49c1fa9baf5d0962088e1d4c72c08.png"
        alt="Achievements"
      />
      <div>
        <h4 className="text-3xl font-bold">Our Achievements</h4>
        <p className="text-gray-500 py-4">
          Delivering fresh, high-quality groceries with over 10,000 satisfied
          customers and a commitment to sustainable sourcing.
        </p>

        <div className="grid grid-cols-2 gap-4 text-nowrap">
          {countItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={`count-div ${item.bg} flex flex-col items-center justify-center p-4 rounded-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h5 className="count-h text-3xl font-bold">
                <CountUp
                  end={item.value}
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h5>
              <p className="count-p mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
