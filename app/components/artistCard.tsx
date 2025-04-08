"use client";
import Image from "next/image";
import { useState } from "react";

interface CardProp {
  src: string;
  label: string;
  name: string;
  subName: string;
  intro: string;
}

// 人物介紹元件
export default function ArtistCard({ ...arg }: CardProp) {
  const [imgSrc, setImgSrc] = useState(arg.src);

  return (
    <>
      <div className="flex flex-col gap-5 bg-gray-200 p-10 md:flex-row md:gap-10">
        <div className="relative mx-auto aspect-square h-auto w-64 max-w-96 md:mx-0 md:w-full">
          <Image
            src={imgSrc}
            fill
            alt={arg.name}
            sizes="100vw"
            className="bg-gray-400 object-cover"
            onError={(e) => setImgSrc("/image/user.png")}
          />
        </div>
        <div className="my-auto">
          <span className="border-main hidden border-b text-2xl md:inline">
            {arg.label}
          </span>
          <div className="px-10 py-0 md:py-16">
            <div className="mb-5 text-center md:text-left">
              <span className="border-main mb-2 inline-block border-b text-lg md:hidden">
                {arg.label}
              </span>
              <div className="text-4xl font-medium tracking-wider">
                {arg.name}
              </div>
              <div className="text-lg leading-4">{arg.subName}</div>
            </div>
            <div>{arg.intro}</div>
          </div>
        </div>
      </div>
    </>
  );
}
