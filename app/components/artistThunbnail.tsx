import Image from "next/image";
import Link from "next/link";

interface CardProp {
  href: string;
  src: string;
  label: string;
  name: string;
  email: string;
}

// 人物介紹元件
export default function ArtistThunbnail({ ...arg }: CardProp) {
  return (
    <Link
      href={arg.href}
      className="flex min-h-[300px] w-full max-w-[581px] min-w-[500px] items-center bg-gray-200"
    >
      {/* Mark */}
      <div className="h-auto w-1/6">
        <div className="text-center text-6xl">Z</div>
      </div>
      {/* 作者照片 */}
      <div className="relative aspect-square h-auto w-full max-w-56">
        <Image
          src={arg.src}
          fill
          alt={arg.name}
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
        <div className="my-2 text-sm text-gray-700">{arg.email}</div>
      </div>
    </Link>
  );
}
