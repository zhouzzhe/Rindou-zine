"use client";
import { Dot } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

interface albumProp {
  creator: string;
  year: number;
  label: string;
  CoverSrc: string;
  date: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const pathCreator = pathname.split("/")[2];

  const [creatorList, setCreatorList] = useState<string[]>([]);

  useEffect(() => {
    if (pathname.startsWith(`/creator/${pathCreator}`)) {
      import(`@/app/lib/albumList.json`).then((module) => {
        const albumList: albumProp[] = module.default;
        const allCreator = [...new Set(albumList.map((item) => item.creator))];
        setCreatorList(allCreator);
      });
    }
  }, [pathname]);

  return (
    <div
      className={clsx(
        "sticky top-20 hidden h-full max-w-20 min-w-40 flex-col gap-3 px-4 py-20 text-lg",
        "md:flex",
      )}
    >
      {creatorList.map((item, index) => {
        const isClick = `${item.toLocaleLowerCase()}` === pathCreator;

        return (
          <Link
            href={`/creator/${item.toLocaleLowerCase()}`}
            key={index}
            className={clsx(
              "hover:text-lighter active:text-deeper ml-3 flex items-center",
              {
                "text-main": isClick,
              },
            )}
          >
            {item}
            <Dot
              className={clsx({
                "inline-block": isClick,
                hidden: !isClick,
              })}
            />
          </Link>
        );
      })}
    </div>
  );
}
