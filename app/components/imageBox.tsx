"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ImageBoxProp {
  src: string;
  title?: string;
}

export default function ImageBox({ ...arg }: ImageBoxProp) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const pathCreator = pathSegments[2];
  const pathDate = pathSegments[3];

  // const [imgDirection, setImgDirection] = useState<"landscape" | "portrait">(
  //   "landscape",
  // );
  // const imageSrc = `/image/${pathCreator}/${pathDate}/${arg.src}.jpg`;

  // // 檢測圖片方向
  // useEffect(() => {
  //   const img = new window.Image();
  //   img.src = imageSrc;

  //   img.onload = () => {
  //     const isPortrait = img.naturalHeight > img.naturalWidth;
  //     setImgDirection(isPortrait ? "portrait" : "landscape");
  //   };

  // }, [imageSrc]); // 當 imageSrc 變化時重新檢測

  return (
    <div className="my-3 w-full">
      <Image
        src={`/image/${pathCreator}/${pathDate}/${arg.src}.jpg`}
        alt={arg.src}
        width={1440}
        height={1440}
        className="aspect-video max-h-[880px] w-full object-contain"
      ></Image>
      <div className="text-xs text-gray-400 italic">{arg.title}</div>
    </div>
  );
}
