"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";

interface albumProp {
  creator: string;
  src: string;
  href: string;
  date: string;
  label: string;
  year: number;
}

export default function AlbumListThunbnail({ ...arg }: albumProp) {
  return (
    // layout動畫時不改變大小
    <div className="relative">
      <motion.div
        className="group h-auto w-64 origin-left overflow-hidden"
        layout
        transition={{ duration: 0.4 }}
      >
        <Link href={arg.href}>
          {/* 圖片 */}
          <div className="relative aspect-video h-auto w-full">
            <Image
              src={arg.src}
              fill
              alt={arg.label}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* 文字區塊 */}
          <div className="mt-1 flex items-end justify-between">
            <div>
              <div className="mb-1 ps-2 text-xs tracking-wider">
                {arg.year}.{arg.date}
              </div>
              <div className="max-w-52 overflow-auto border-b border-l ps-2 tracking-wider text-nowrap">
                {arg.label}
              </div>
            </div>
            {/* 邊界 */}
            <div
              className={clsx(
                "h-[1px] w-full origin-left scale-x-0 bg-black",
                "transition-transform delay-300 duration-500",
                "group-hover:scale-x-100 group-hover:delay-0",
              )}
            />
            {/* 作者 */}
            <div className="relative border-r border-b border-black px-2 pb-1 text-[10px] leading-3 italic">
              <div className="text-gray-500">{arg.creator}</div>
              <div
                className={clsx(
                  "text-deeper absolute top-0 w-0 overflow-hidden",
                  "transition-[width] delay-0 duration-300",
                  "group-hover:w-full group-hover:delay-500",
                )}
              >
                {arg.creator}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
