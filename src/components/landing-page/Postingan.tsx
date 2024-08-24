"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import PostSlideButton from "./PostSlideButton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Postingan = () => {
  return (
    <div className="flex w-full justify-center bg-base-dark py-24">
      <div className="flex w-[1280px] flex-col items-center gap-y-14">
        <h1 className="w-full text-center font-primary text-[64px] font-extrabold text-white">
          Postingan Terbaru
        </h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          className="flex w-full items-center justify-center"
          centeredSlides={true}
        >
          <PostSlideButton />
          <SwiperSlide>
            <div className="mx-auto flex w-fit items-center justify-center gap-x-14">
              <Image
                src="/posts/unveiling-the-dreams.png"
                width={412}
                height={516}
                alt="Foto"
              />
              <div className="flex w-[462px] flex-col gap-y-6">
                <h1 className="font-secondary text-[32px] font-bold text-white text-opacity-70">
                  Unveiling The Dreams and Realities of Informatics Warriors
                </h1>
                <p className="font-secondary text-base font-normal text-white text-opacity-70">
                  Metus in sit mollis vulputate. Mollis ac amet nec malesuada.
                  Nunc elit ac placerat dictum ornare purus aenean aliquam
                  fermentum. Non pulvinar placerat vestibulum faucibus. A
                  dignissim in neque integer maecenas sed. Vulputate phasellus
                  placerat id nulla felis. Bibendum condimentum ipsum sed mauris
                  tincidunt risus. Sed sagittis donec tellus pulvinar.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto flex items-center justify-center gap-x-14">
              <Image
                src="/posts/unveiling-the-dreams.png"
                width={412}
                height={516}
                alt="Foto"
              />
              <div className="flex w-[462px] flex-col gap-y-6">
                <h1 className="font-secondary text-[32px] font-bold text-white text-opacity-70">
                  Unveiling The Dreams and Realities of Informatics Warriors
                </h1>
                <p className="font-secondary text-base font-normal text-white text-opacity-70">
                  Metus in sit mollis vulputate. Mollis ac amet nec malesuada.
                  Nunc elit ac placerat dictum ornare purus aenean aliquam
                  fermentum. Non pulvinar placerat vestibulum faucibus. A
                  dignissim in neque integer maecenas sed. Vulputate phasellus
                  placerat id nulla felis. Bibendum condimentum ipsum sed mauris
                  tincidunt risus. Sed sagittis donec tellus pulvinar.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Postingan;
