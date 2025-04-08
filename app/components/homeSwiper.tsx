"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";

import Image from "next/image";
import AlbumList from "@/app/lib/albumList.json";
import Link from "next/link";

export default function HomeSwiper() {
  function CustomButton() {
    return (
      <>
        <div className="group custom-prev absolute top-0 left-0 z-10 flex h-screen w-14 cursor-pointer flex-row-reverse items-center select-none">
          <div className="vertical-rl group-hover:text-lighter text-xs group-hover:scale-110">
            PREV
          </div>
          <div className="relative h-[1px] w-full bg-black">
            <div className="bg-lighter absolute h-[1px] w-full origin-right scale-0 transition-transform duration-300 group-hover:scale-100" />
          </div>
        </div>
        <div className="group custom-next absolute top-0 right-0 z-10 flex h-screen w-14 cursor-pointer items-center select-none">
          <div className="vertical-rl group-hover:text-lighter rotate-180 text-xs group-hover:scale-110">
            NEXT
          </div>
          <div className="relative h-[1px] w-full bg-black">
            <div className="bg-lighter absolute h-[1px] w-full origin-left scale-0 transition-transform duration-300 group-hover:scale-100" />
          </div>
        </div>
      </>
    );
  }

  return (
    <Swiper
      modules={[Pagination, Navigation, Keyboard, Autoplay]}
      speed={800}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      keyboard={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="relative h-full w-full"
    >
      {AlbumList.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={item.CoverSrc}
                alt="大圖"
                fill
                className="pointer-events-none object-cover select-none"
              />
              <Link
                href={`/creator/${item.creator}/${item.year}${item.date.replace(".", "")}`}
              >
                <div className="absolute bottom-10 flex w-full flex-col items-center justify-center">
                  {/* 字體仍需更換 */}
                  <div className="text-shadow text-4xl text-white">
                    {item.date}
                  </div>
                  <div className="text-shadow text-6xl text-white">
                    {item.label}
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>
        <Image
          src="/image/background.jpg"
          alt="大圖"
          fill
          className="pointer-events-none object-cover select-none"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image/background2.jpg"
          alt="大圖"
          fill
          className="pointer-events-none object-cover select-none"
        />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide> */}
      <CustomButton />
    </Swiper>
  );
}
