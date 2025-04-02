"use client";

import { useState } from "react";
import albumList from "@/app/lib/albumList.json";
import { AnimatePresence, motion } from "framer-motion";
import { Dot } from "lucide-react";

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

  // 切換創作者是否打開
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
        {/* All */}
        <div
          className={`hover:text-main active:text-deeper relative flex cursor-pointer items-center pr-3 text-lg ${!selectedCreator && !selectedYear ? "text-lighter" : ""}`}
          onClick={resetFilter}
        >
          All
          {!selectedCreator && !selectedYear && (
            <motion.div
              className="absolute right-0 h-1/2 border-r"
              layoutId="activeBorder"
            ></motion.div>
          )}
        </div>
        {/* 創作者 */}
        {creators.map((creator, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            onClick={() => toggleCreator(creator)}
            layout
          >
            <motion.div
              layout
              className={`hover:text-main active:text-deeper relative pr-3 text-lg ${openCreator[creator] ? "text-lighter" : ""}`}
            >
              {creator}
              {openCreator[creator] && (
                <motion.div
                  className="absolute top-[6.5px] right-0 h-1/2 border-r"
                  layoutId="activeBorder"
                ></motion.div>
              )}
            </motion.div>

            {openCreator[creator] && (
              <AnimatePresence>
                <motion.div
                  className="origin-top"
                  animate={{ scaleY: 1 }}
                  initial={{ scaleY: 0 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {sortedYear(creator).map((year, index) => (
                    <motion.div
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleYear(creator, year);
                      }}
                      className={`hover:text-main active:text-deeper relative my-0.5 py-1 pr-3 text-right text-sm ${
                        selectedYear === year
                          ? "text-main" // 選取時最深色
                          : openCreator[creator]
                            ? "text-lighter" // 展開時一般橘色
                            : ""
                      }`}
                      animate={{ scaleY: 1 }}
                      initial={{ scaleY: 0 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {year}
                      {selectedYear === year && (
                        <motion.div
                          className="absolute top-[8.5px] right-0 h-1/3 border-r"
                          layoutId="activeBorderYear"
                        ></motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>
    </aside>
  );
}
