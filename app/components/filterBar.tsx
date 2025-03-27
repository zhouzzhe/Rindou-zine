"use client";

import { useCallback, useState } from "react";
import albumList from "@/app/lib/albumList.json";

interface filterBarProp {
  onFilterChange: (
    selectedCreator: string | null,
    selectedYear: number | null,
  ) => void;
}

export default function FilterBar({ onFilterChange }: filterBarProp) {
  // new Set(array)，將一個陣列傳入，它會自動移除所有重複的值，只保留唯一的元素並產生出物件，並且用展開運算符，將物件展開轉為陣列。
  const creators = [...new Set(albumList.map((item) => item.creator))];
  // 管理每個創作者的狀態
  const [openCreator, setOpenCreator] = useState<Record<string, boolean>>(
    creators.reduce(
      (acc, creator) => {
        acc[creator] = false;
        return acc;
      },
      {} as Record<string, boolean>,
    ),
  );

  const [selectedCreator, setSelectedCreator] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // 切換某個創作者的狀態
  const toggleCreator = (creator: string) => {
    setOpenCreator((prev) => {
      const newOpenCreator = { ...prev };
      const willBeOpen = !prev[creator];
      Object.keys(newOpenCreator).forEach((key) => {
        newOpenCreator[key] = false;
      });
      newOpenCreator[creator] = willBeOpen;
      return newOpenCreator;
    });

    if (!openCreator[creator]) {
      setSelectedCreator(creator);
      setSelectedYear(null);
      onFilterChange(creator, null);
    } else {
      setSelectedCreator(null);
      setSelectedYear(null);
      onFilterChange(null, null);
    }
  };

  const handleYear = (creator: string, year: number) => {
    setSelectedCreator(creator);
    setSelectedYear(year);
    onFilterChange(creator, year);
  };

  // 打開的年份按照排列排序
  const sortedYear = (creator: string): number[] => {
    const albums = albumList.filter((item) => item.creator === creator);
    const years = [...new Set(albums.map((item) => item.year))];
    return years.sort((a, b) => b - a);
  };

  const resetFilter = () => {
    setOpenCreator((prev) => {
      const newOpenCreator = { ...prev };
      Object.keys(newOpenCreator).forEach((key) => {
        newOpenCreator[key] = false;
      });
      return newOpenCreator;
    });
    setSelectedCreator(null);
    setSelectedYear(null);
    onFilterChange(null, null);
  };

  return (
    <aside className="w-32 shrink-0 pr-5 select-none">
      <div className="mb-5 flex w-full flex-col items-end border-t">
        <div className="p-2 text-lg font-semibold">Creator</div>
        <div className="mr-3 cursor-pointer text-lg" onClick={resetFilter}>
          All
        </div>
        {creators.map((creator, index) => (
          <div
            key={index}
            className="mr-3 cursor-pointer"
            onClick={() => toggleCreator(creator)}
          >
            <div className="text-lg">{creator}</div>
            {openCreator[creator] && (
              <>
                {sortedYear(creator).map((year, index) => (
                  <div
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleYear(creator, year);
                    }}
                    className="mb-0.5 py-1 text-right text-sm"
                  >
                    {year}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
