import AlbumThumbnail from "@/app/components/albumThunbnail";
import ArtistCard from "@/app/components/artistCard";
import AlbumList from "@/app/lib/albumList.json";

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
    <section className="m-16">
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
        <div key={year}>
          <div className="flex items-center px-20 pt-12 pb-4 text-lg">
            <div className="mx-2 text-gray-400">{year}</div>
            <div className="h-[1px] w-full bg-gray-400"></div>
          </div>

          <div className="px-28">
            <div className="ms-10 flex flex-wrap gap-8">
              {groupAlbums[year].map((item, index) => {
                return (
                  <AlbumThumbnail
                    key={index}
                    href={`/creator/zzhe/${year}${item.date.replace(".", "")}`}
                    label={item.label}
                    src={item.src}
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
