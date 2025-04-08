"use client";
import { Dot, BookImage } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const blurVariants = {
  hidden: { opacity: 0, filter: "blur(3px)" },
  enter: { opacity: 1, filter: "blur(0px)" },
};

function MenuLink({ label }: { label: string; toggleMenu?: () => void }) {
  return (
    <Link
      className="hover:text-main active:text-deeper flex items-center"
      href={`/${label.toLocaleLowerCase()}`}
    >
      <Dot className="inline-block" size={40} />
      <span className="text-3xl">{label}</span>
    </Link>
  );
}

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
    setIsOpen(false);
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

  const [isHide, setIsHide] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  });

  return (
    <motion.header
      className="fixed top-0 z-50 flex h-[72] w-full justify-between px-16 py-5 select-none"
      animate={!isHide ? { y: 0 } : { y: "-100%" }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      {/* LOGO */}
      <Link href="/" className="hover:text-lighter active:text-main flex cursor-pointer items-center transition-transform duration-300 hover:scale-105">
        <BookImage />
        <div>リンドウジン</div>
        {/* （Rindou Zine） */}
      </Link>

      {/* 分頁狀態 */}
      <div className="text-3xl font-medium hidden md:block">{page.toLocaleUpperCase()}</div>

      {/* Menu Button */}
      <div
        onClick={toggleMenu}
        className={clsx(
          "group z-50 flex cursor-pointer items-center",
          "rounded-2xl border border-black px-4 text-black",
          "duration-150 transition-all",
          "hover:bg-lighter active:bg-main active:text-lightest hover:text-black hover:border-main",
        )}
      >
        <span className="">{`${!isOpen ? "Menu" : "Close"}`}</span>
        <Dot className="transition-transform duration-500 group-hover:scale-140" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="fixed inset-0 bg-white"
            variants={blurVariants}
            initial="hidden"
            animate="enter"
            // exit="hidden"
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
                <MenuLink label="All-album" />
                <MenuLink label="Creator" />
                {/* <MenuLink label="Contact" /> */}
              </nav>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
