"use client";
import Image from "next/image";
import Link from "next/link";
import { delay, motion } from "framer-motion";
import { useState } from "react";

interface CardProp {
  href: string;
  src: string;
  label: string;
  name: string;
  email: string;
}

// 人物介紹元件
export default function ArtistThunbnail({ ...arg }: CardProp) {
  const [isHover, setIsHover] = useState(false);

  const maskAnimate = {
    initial: { scale: 0 },
    hover: {
      scale: 10000,
      transition: {
        duration: 1.3,
        delay: 0.7,
      },
    },
  };
  const logoAnimate = {
    initial: { x: 0 },
    hover: {
      x: 145,
      scale: 2,
      rotate:-90 ,
      transition: {
        delay: 0.4,
      },
    },
  };

  return (
    <Link
      href={arg.href}
      className="relative flex min-h-[270px] w-full max-w-[581px] min-w-[500px] items-center overflow-hidden border border-gray-100 bg-gray-100"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* 灰色遮罩 */}
      <motion.div
        className="absolute top-1/2 left-50 z-10 h-[1px] w-[1px] rounded-full bg-white opacity-90"
        variants={maskAnimate}
        animate={!isHover ? "initial" : "hover"}
      />

      {/* Mark */}
      <div className="relative z-20 h-auto w-1/6">
        <motion.div
          className="flex items-center justify-center"
          variants={logoAnimate}
          animate={!isHover ? "initial" : "hover"}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="text-5xl text-black vertical-rl">ZZHE</div>
        </motion.div>
      </div>

      {/* 作者照片 */}
      <div className="relative aspect-square h-auto w-full max-w-56">
        <Image
          src={arg.src}
          fill
          alt={arg.name}
          sizes=""
          className="bg-gray-600 object-cover"
        />
      </div>
      {/* 作者介紹 */}
      <div className="flex h-full max-h-56 grow flex-col justify-between gap-10 p-5">
        <div>
          <div className="my-2 text-sm text-gray-700">
            {arg.label || "標籤"}
          </div>
          <div className="mb-3 text-xl font-semibold tracking-wider">
            {arg.name || "姓名"}
          </div>
        </div>
        <div className="border-t py-2 text-sm text-gray-700">{arg.email}</div>
      </div>
    </Link>
  );
}
