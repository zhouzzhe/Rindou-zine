import { Dot } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex max-w-20 min-w-40 flex-col gap-3 bg-orange-300 px-4 py-20 text-lg">
      {["All-album", "Creator", "Contact"].map((item, index) => {
        return (
          <Link
            href={`/${item.toLocaleLowerCase()}`}
            key={index}
            className="flex items-center"
          >
            <Dot className="inline-block" />
            {item}
          </Link>
        );
      })}
    </div>
  );
}
