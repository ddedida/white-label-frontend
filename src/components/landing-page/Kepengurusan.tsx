"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideButton from "./SlideButton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Kepengurusan = () => {
  return (
    <section className="flex w-full justify-center bg-white py-24">
      <div className="relative flex w-[1280px] flex-col gap-y-14">
        <h1 className="w-full font-primary text-[64px] font-extrabold text-base-dark">
          Kepengurusan.
        </h1>
        <div className="w-full">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={80}
            className="w-[1280px]"
          >
            <SlideButton />
            <SwiperSlide>
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/fany.png"
                  width={380}
                  height={457}
                  alt="Fany"
                />
                <div className="flex w-full flex-col items-center gap-y-1">
                  <p className="font-secondary text-xl font-semibold text-base-dark">
                    Mohammad Fany Faizul
                  </p>
                  <p className="font-secondary text-base font-semibold tracking-widest text-black-light-3">
                    KETUA HIMPUNAN
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/aisyah.png"
                  width={380}
                  height={457}
                  alt="Aisyah"
                />
                <div className="flex w-full flex-col items-center gap-y-1">
                  <p className="font-secondary text-xl font-semibold text-base-dark">
                    Aisyah Nurhalimah
                  </p>
                  <p className="font-secondary text-base font-semibold tracking-widest text-black-light-3">
                    BENDAHARA 1
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/luna.png"
                  width={380}
                  height={457}
                  alt="Luna"
                />
                <div className="flex w-full flex-col items-center gap-y-1">
                  <p className="font-secondary text-xl font-semibold text-base-dark">
                    Clarissa Luna Maheswari
                  </p>
                  <p className="font-secondary text-base font-semibold tracking-widest text-black-light-3">
                    BENDAHARA 2
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/fany.png"
                  width={380}
                  height={457}
                  alt="Fany"
                />
                <div className="flex w-full flex-col items-center gap-y-1">
                  <p className="font-secondary text-xl font-semibold text-base-dark">
                    Mohammad Fany Faizul
                  </p>
                  <p className="font-secondary text-base font-semibold tracking-widest text-black-light-3">
                    KETUA HIMPUNAN
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/aisyah.png"
                  width={380}
                  height={457}
                  alt="Aisyah"
                />
                <div className="flex w-full flex-col items-center gap-y-1">
                  <p className="font-secondary text-xl font-semibold text-base-dark">
                    Aisyah Nurhalimah
                  </p>
                  <p className="font-secondary text-base font-semibold tracking-widest text-black-light-3">
                    BENDAHARA 1
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/luna.png"
                  width={380}
                  height={457}
                  alt="Luna"
                />
                <div className="flex w-full flex-col items-center gap-y-1">
                  <p className="font-secondary text-xl font-semibold text-base-dark">
                    Clarissa Luna Maheswari
                  </p>
                  <p className="font-secondary text-base font-semibold tracking-widest text-black-light-3">
                    BENDAHARA 2
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Kepengurusan;
