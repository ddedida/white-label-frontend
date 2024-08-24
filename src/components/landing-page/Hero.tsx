/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideButton from "./SlideButton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <section className="flex h-[1024px] w-full justify-center">
      <div className="flex h-fit w-[1280px] flex-col gap-y-12">
        <div className="mt-20 h-fit w-full font-primary text-[64px] font-extrabold text-base-dark">
          <h1>Selamat datang di</h1>
          <h1>Himpunan Mahasiswa</h1>
          <h1>Teknik Computer-Informatika.</h1>
        </div>
        <div className="relative h-fit w-full">
          <Swiper slidesPerView={3} spaceBetween={40} loop={true}>
            <SlideButton />
            <SwiperSlide>
              <div className="h-[446px] w-[400px] overflow-hidden">
                <img
                  src="/images/hmtc-1.png"
                  alt="HMTC1"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[446px] w-[400px] overflow-hidden">
                <img
                  src="/images/hmtc-2.png"
                  alt="HMTC2"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[446px] w-[400px] overflow-hidden">
                <img
                  src="/images/hmtc-3.png"
                  alt="HMTC3"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[446px] w-[400px] overflow-hidden">
                <img
                  src="/images/hmtc-1.png"
                  alt="HMTC1"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[446px] w-[400px] overflow-hidden">
                <img
                  src="/images/hmtc-2.png"
                  alt="HMTC2"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[446px] w-[400px] overflow-hidden">
                <img
                  src="/images/hmtc-3.png"
                  alt="HMTC3"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
