"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

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
    <div className="relative">
      <motion.div
        className="group h-auto w-64 origin-left"
        layout
        transition={{ duration: 0.4 }}
      >
        <Link href={arg.href}>
          <div className="relative aspect-video h-auto w-full">
            <Image
              src={arg.src}
              fill
              alt={arg.label}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-1 flex items-end justify-between">
            <div>
              <div className="mb-1 ps-2 text-xs tracking-wider">
                {arg.year}.{arg.date}
              </div>
              <div className="max-w-52 overflow-auto border-b border-l ps-2 tracking-wider text-nowrap">
                {arg.label}
              </div>
            </div>
            <div className="border-r border-b px-2 pb-1 text-[10px] leading-3 text-gray-600 italic">
              {arg.creator}
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
