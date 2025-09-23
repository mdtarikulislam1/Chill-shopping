"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function Customer() {
  const slides = [
    {
      id: 1,
      text: "A fashion blogger is someone who creates content related to fashion, style, and trends. They share tips on clothing, accessories, and beauty through social media or blogs. Their main goal is to guide followers on style and keep them updated on the latest trends.",
      name: "Sarah Johnson",
      title: "Fashion Blogger",
      img: "https://i.postimg.cc/9QGSJw8w/247fe9a68503ddc783c783e2789c9f3de7b82d86.png",
      style: "bg-green-100",
    },
    {
      id: 2,
      text: "A Creative Director is a professional responsible for overseeing the creative vision of a project, brand, or company. They guide teams in design, advertising, and content creation to ensure a consistent and compelling visual and conceptual style.",
      name: "Michael Adams",
      title: "Creative Director",
      img: "https://i.postimg.cc/C5Xt6Gpk/37ba1f0c27b9f314d95031ba7fab872a326d6f42.png",
      style: "bg-yellow-100",
    },
    {
      id: 3,
      text: "An entrepreneur is a person who starts, organizes, and manages a business venture, taking on financial risks in the hope of profit. They identify opportunities, innovate solutions, and drive growth.",
      name: "Emily Clark",
      title: "Entrepreneur",
      img: "https://i.postimg.cc/C5zXNvXw/cf6c6aaaeb8e7129012da94068d7be298c245b23.png",
      style: "bg-red-100",
    },
    {
      id: 4,
      text: "An entrepreneur is a person who starts, organizes, and manages a business venture, taking on financial risks in the hope of profit. They identify opportunities, innovate solutions, and drive growth.",
      name: "Md Torikul",
      title: "Web Developer",
      img: "https://i.postimg.cc/hvDJV187/IMG-20250805-155343-284-1-removebg-preview.png",
      style: "bg-blue-100",
    },
  ];

  return (
    <div className="my-20 px-6 py-3 container-1400">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        className="px-4"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`flex flex-col items-center justify-between rounded-lg shadow-md ${slide.style} relative min-h-96 transition-all duration-500 ease-in-out`}
          >
            <div className="p-5 text-center">
              <Image
                src={slide.img}
                alt={slide.name}
                width={60} // w-20 = 80px
                height={60} // h-20 = 80px
                className="rounded-full mx-auto mb-3 w-20 h-20"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {slide.name}
              </h3>
              <p className="text-sm text-gray-600">{slide.title}</p>
              <div className="flex justify-center gap-1 text-yellow-500 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <div className="text-gray-700 p-5 text-sm leading-relaxed text-center">
              {slide.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
