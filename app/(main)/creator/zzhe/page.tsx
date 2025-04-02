"use client";
import AlbumThumbnail from "@/app/components/albumThunbnail";
import ArtistCard from "@/app/components/artistCard";
import AlbumList from "@/app/lib/albumList.json";
import clsx from "clsx";

const zzheAlbumList = AlbumList.filter((item) => item.creator === "zzhe");
const groupAlbums = zzheAlbumList.reduce(
  (acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  },
  {} as Record<number, typeof zzheAlbumList>,
);

export default function zzhe() {
  const sortedYears = Object.keys(groupAlbums)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="m-16 max-w-[1440px] mx-auto">
      <div className="p-16">
        {/* 人物介紹 */}
        <ArtistCard
          src="/image/zzhe/zzhe.jpg"
          label="PHOTOGRAPHER"
          name="周哲緯"
          subName="Zhou Zhe Wei"
          intro="1999年生，高雄人，現居於台中市，喜歡看電影，假日常常一個人看電影看到凌晨，閒暇時間偶爾會出門散步，拍拍照或者就是騎車亂晃。"
        />
      </div>

      {sortedYears.map((year) => (
        <div key={year} className="group/year">
          <div className="mx-20 mt-12 flex items-center pb-4 text-lg">
            {/* 文字 */}
            <div className="relative overflow-hidden px-2">
              <div className="text-gray-400">{year}</div>
              <div
                className={clsx(
                  "absolute top-0 w-0 overflow-hidden text-main",
                  "transition-[width] duration-300 delay-500",
                  "group-hover/year:w-full group-hover/year:delay-0",
                )}
              >
                {year}
              </div>
            </div>

            {/* 線條 */}
            <div className="relative h-[1px] w-full bg-gray-400">
              <div
                className={clsx(
                  "absolute top-0 h-[1px] w-full origin-left bg-main",
                  "scale-x-0 transition-transform duration-500 delay-0",
                  "group-hover/year:scale-x-100 group-hover/year:delay-300",
                )}
              ></div>
            </div>
          </div>

          <div className="px-28">
            <div className="ms-10 flex flex-wrap gap-8">
              {groupAlbums[year].map((item, index) => {
                return (
                  <AlbumThumbnail
                    key={index}
                    href={`/creator/zzhe/${year}${item.date.replace(".", "")}`}
                    label={item.label}
                    src={item.CoverSrc}
                    date={item.date}
                    year={item.year}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
