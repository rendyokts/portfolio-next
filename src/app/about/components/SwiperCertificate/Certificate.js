'use client';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CERTIFICATELISTS } from "@/app/commons/constants/CertificateLists";
import Image from "next/image";

export default function SwiperCertificate() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper border w-full"
      >
        {CERTIFICATELISTS.map((item, i) => (
          <SwiperSlide key={i} className="bg-red-500 p-4 flex justify-center items-center w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              width={2000}
              height={2000}
              className="w-96"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
