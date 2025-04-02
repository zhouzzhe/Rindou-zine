"use client";

import { useState } from "react";
import AlbumListThunbnail from "@/app/components/albumListThunbnail";
import FilterBar from "@/app/components/filterBar";
import albumList from "@/app/lib/albumList.json";
import { AnimatePresence, motion } from "motion/react";

// 將日期轉換為可比較的格式
const formatDate = (date: string): string => {
  return date.replace(".", "");
};

export default function AllAlbum() {
  const [selectedCreator, setSelectedCreator] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleFilterChange = (creator: string | null, year: number | null) => {
    setSelectedCreator(creator);
    setSelectedYear(year);
  };

  let filteredAlbums = albumList;
  if (selectedCreator) {
    filteredAlbums = albumList.filter(
      (item) => item.creator === selectedCreator,
    );
  }
  if (selectedYear) {
    filteredAlbums = filteredAlbums.filter(
      (item) => item.year === selectedYear,
    );
  }

  const sortedFilteredAlbums = filteredAlbums.sort((a, b) => {
    // 先比較年份
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    // 在同一年中比較日期
    const dateA = formatDate(a.date);
    const dateB = formatDate(b.date);
    return dateB.localeCompare(dateA);
  });

  const variants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    enter: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
  };

  return (
    <section className="m-16">
      <div className="flex w-full py-28">
        <FilterBar onFilterChange={handleFilterChange} />
        <AnimatePresence>
          <motion.div
            className="flex w-full flex-wrap justify-around gap-x-3 gap-y-8 px-10"
            variants={variants}
            initial="hidden"
            animate="enter"
            // exit="exit"
            transition={{ duration: 0.6 }}
            key={`${selectedCreator || "all"}-${selectedYear || "all"}`}
          >
            {sortedFilteredAlbums.map((item, index) => (
              <AlbumListThunbnail
                key={index}
                href={`/creator/${item.creator}/${item.year}${item.date.replace(".", "")}`}
                src={item.CoverSrc}
                date={item.date}
                label={item.label}
                year={item.year}
                creator={item.creator}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
