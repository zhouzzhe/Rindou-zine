"use client";
import { Dot, BookImage } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const blurVariants = {
  hidden: { opacity: 0, filter: "blur(3px)" },
  enter: { opacity: 1, filter: "blur(0px)" },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [page, setPage] = useState("");
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const secondSegment = pathname.split("/")[2];
  useEffect(() => {
    const selectedSegment = secondSegment || firstSegment || "";
    setPage(selectedSegment);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // 開啟選單後禁止捲動
    } else {
      document.body.classList.remove("overflow-hidden"); // 恢復捲動
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 flex h-[72] w-full justify-between px-16 py-5 select-none">
      {/* LOGO */}
      <div className="flex items-center">
        <BookImage />
        <Link href="/">logo</Link>
      </div>

      {/* 分頁狀態 */}
      <div className="text-3xl font-medium">{page.toLocaleUpperCase()}</div>

      {/* Menu */}
      <div
        onClick={toggleMenu}
        className="group z-50 flex cursor-pointer items-center rounded-2xl border border-black px-4 text-black duration-700 hover:bg-black hover:text-white"
      >
        <span className="">{`${!isOpen ? "Menu" : "Close"}`}</span>
        <Dot className="group-hover:scale-140" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="fixed inset-0 bg-white"
            variants={blurVariants}
            initial="hidden"
            animate="enter"
            exit="hidden"
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <div className="flex items-center">
              {/* 影片展示 */}
              <div className="w-1/2">
                <div className="relative mx-auto flex aspect-[7/8] max-h-[100vh]">
                  <Image
                    src="/image/background.jpg"
                    alt="test"
                    fill
                    className="object-cover p-5"
                  ></Image>
                </div>
              </div>
              {/* Menu選項 */}
              <nav className="flex h-[100vh] w-1/2 flex-col justify-center gap-10 p-20 font-semibold text-black">
                <Link
                  className="flex items-center"
                  href="/all-album"
                  onClick={toggleMenu}
                >
                  <Dot className="inline-block" size={40} />
                  <span className="text-3xl">All-album</span>
                </Link>
                <Link
                  className="flex items-center"
                  href="/creator"
                  onClick={toggleMenu}
                >
                  <Dot className="inline-block" size={40} />
                  <span className="text-3xl">Creator</span>
                </Link>
                <Link
                  className="flex items-center"
                  href="/contact"
                  onClick={toggleMenu}
                >
                  <Dot className="inline-block" size={40} />
                  <span className="text-3xl">Contact</span>
                </Link>
              </nav>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </header>
  );
}
