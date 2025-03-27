"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  enter: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(10px)" },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* 進入動畫（覆蓋全屏） */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ duration: 0.4, ease: "linear" }}
        key={pathname}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
