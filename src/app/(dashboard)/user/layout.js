"use client";
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import Navtop from "@/app/component/Navtop";
import React, { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // page load হওয়ার পরে loading false হবে
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span
          className="loading loading-infinity"
          style={{ width: "70px", height: "70px", color: "blue" }}
        ></span>
      </div>
    );
  }
  return (
    <div>
      <Navtop />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer/>
    </div>
  );
}
