"use client";
import Link from "next/link";
import { Dot } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface albumProp {
  creator: string;
  year: number;
  label: string;
  src: string;
  date: string;
}

export default function SubSidebar() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const pathCreator = pathSegments[2];
  const [grouped, setGrouped] = useState<Record<number, albumProp[]> | null>(
    null,
  );

  // 根據pathname，動態import creator的json檔，然後在依年份分類
  useEffect(() => {
    if (pathname.startsWith(`/creator/${pathCreator}`)) {
      import(`@/app/lib/albumList.json`).then((module) => {
        const AlbumList: albumProp[] = module.default;
        const zzheAlbumList = AlbumList.filter(
          (item) => item.creator === "zzhe",
        );
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
        // console.log(groupAlbums);
        setGrouped(groupAlbums);
      });
    }
  }, [pathname]);

  const sortedYears = grouped
    ? Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a)
    : [];
  // console.log(sortedYears);

  return (
    <div className="flex min-w-40 flex-col gap-3 bg-blue-300 px-4 py-20 text-end text-lg">
      {sortedYears &&
        sortedYears.map((year) => (
          <div key={year}>
            <div className="my-1 flex items-center">
              <div className="h-[1px] w-full bg-black"></div>
              <div className="mx-2">{year}</div>
              <div className="h-[1px] w-full bg-black"></div>
            </div>
            {grouped &&
              grouped[year].map((item, index) => (
                <Link
                  href={`/creator/zzhe/${year}${item.date.replace(".", "")}`}
                  key={index}
                  className="my-1 flex items-center justify-end"
                >
                  {item.date.replace(".", "-")}
                  <Dot className="inline-block" />
                </Link>
              ))}
          </div>
        ))}
    </div>
  );
}
