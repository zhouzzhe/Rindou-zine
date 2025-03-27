import Image from "next/image";
import Link from "next/link";

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
      <Link href={arg.href} className="group h-56 w-64">
        <div className="relative h-40 w-64">
          <Image
            src={arg.src}
            fill
            alt={arg.label}
            className={`object-cover year-${arg.year}`}
          />
        </div>
        <div className="mt-1 border-l border-gray-400 px-2 group-hover:border-black">
          <div className="text-[10px] text-gray-600">{arg.date}</div>
          <div className="tracking-wider">{arg.label}</div>
        </div>
      </Link>
    </>
  );
}
