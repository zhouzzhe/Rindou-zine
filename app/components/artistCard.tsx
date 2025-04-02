import Image from "next/image";

interface CardProp {
  src: string;
  label: string;
  name: string;
  subName: string;
  intro: string;
}

// 人物介紹元件
export default function ArtistCard({ ...arg }: CardProp) {
  return (
    <>
      <div className="flex gap-10 bg-gray-200 p-10">
        <div className="relative aspect-square h-auto w-full max-w-96">
          <Image
            src={arg.src}
            fill
            alt={arg.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="bg-gray-600 object-cover"
          />
        </div>
        <div className="my-auto">
          <span className="border-b border-main text-2xl">
            {arg.label}
          </span>
          <div className="px-10 py-16">
            <div className="mb-5">
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
