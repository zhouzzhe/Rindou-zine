"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface FirstImageProp {
  label?: string;
}

export default function FirstImage({ ...arg }: FirstImageProp) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const pathCreator = pathSegments[2];
  const pathDate = pathSegments[3];
  const imageSrc = `/image/${pathCreator}/${pathDate}/firstImage.jpg`;

  return (
    <>
      {/* 大圖 */}
      <div className="relative h-screen bg-lighter">
        <Image
          src={imageSrc}
          alt={arg.label || "大圖"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="pointer-events-none object-cover select-none"
          priority
        />
        <div className="absolute bottom-0 w-full px-10 text-center">
          {arg.label}
        </div>
      </div>
    </>
  );
}
