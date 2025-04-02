"use client";
import Link from "next/link";
import { Dot } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface albumProp {
  creator: string;
  year: number;
  label: string;
  CoverSrc: string;
  date: string;
}

export default function SubSidebar() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const pathCreator = pathSegments[2];
  const pathDate = pathSegments[3];
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
    <div
      className={clsx(
        "sticky top-20 hidden h-full min-w-40 flex-col gap-3 px-4 py-20 text-end text-lg",
        "md:flex",
      )}
    >
      {sortedYears &&
        sortedYears.map((year) => (
          <div key={year}>
            <div className="my-1 flex items-center">
              {/* <div className="h-[1px] w-full bg-black" /> */}
              <div className="mx-2">{year}</div>
              <div className="h-[1px] w-full bg-black" />
            </div>
            {grouped &&
              grouped[year].map((item, index) => {
                const isClick =
                  `${year}${item.date.replace(".", "")}` === pathDate;
                return (
                  <Link
                    href={`/creator/zzhe/${year}${item.date.replace(".", "")}`}
                    key={index}
                    className={clsx(
                      "my-1 mr-3 flex items-center justify-end",
                      "hover:text-lighter active:text-deeper",
                      {
                        "text-main": isClick,
                      },
                    )}
                  >
                    <Dot
                      className={clsx({
                        "inline-block": isClick,
                        hidden: !isClick,
                      })}
                    />
                    {item.date.replace(".", "-")}
                  </Link>
                );
              })}
          </div>
        ))}
    </div>
  );
}
