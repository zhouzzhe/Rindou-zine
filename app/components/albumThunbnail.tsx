"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

interface albumProp {
  src: string;
  href: string;
  date: string;
  label: string;
  year: number;
}

export default function AlbumThumbnail({ ...arg }: albumProp) {
  return (
    <>
      <Link href={arg.href} className="group h-56 w-64 overflow-hidden">
        <div className="relative h-40 w-64">
          <Image
            src={arg.src}
            fill
            alt={arg.label}
            className={`object-cover year-${arg.year} transition-transform duration-500 group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="relative mt-1 border-l border-gray-300 px-2">
          <div className="text-[10px] text-gray-600">{arg.date}</div>
          <div className="tracking-wider">{arg.label}</div>
          <div
            className={clsx(
              "absolute top-0 -left-0.5 h-full w-[2px] origin-top bg-main",
              "scale-y-0 transition-transform delay-300 duration-300",
              "group-hover:scale-y-100",
            )}
          />
        </div>
      </Link>
    </>
  );
}
