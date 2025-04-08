import Link from "next/link";
import HomeSwiper from "./components/homeSwiper";
import Sidebar from "./components/sidebar";
import SubSidebar from "./components/subsidebar";
import { ChevronsRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-red-200">
        <HomeSwiper />
        {/* <Image
          src={imageSrc}
          alt={arg.label || "大圖"}
          fill
          className="object-cover pointer-events-none select-none"
        /> */}
      </div>

      <section className="relative mx-auto flex max-w-[1440px] justify-center">
        <SubSidebar />
        <div className="mx-auto flex grow flex-col justify-center gap-5 p-10">
          {/* 文字介紹 */}
          <div className="vertical-rl my-auto max-h-96 px-10 leading-10 tracking-wider">
            步履蹣跚匆促，目光掠過塵世，罕有駐足。
            <br />
            從昔日珍稀的底片相機，到今日無處不在的數位紀錄，光影得以定格，時間能被無限複製，卻也悄然失重。
            <br />
            資訊如潮，淹沒凝視的空隙，靈魂在喧鬧中漸遠，忘卻緩慢的價值。
          </div>
          <div className="mx-auto h-32 w-[1px] bg-black" />
          <div className="vertical-rl my-auto max-h-96 px-10 leading-10 tracking-wider ">
            「竜胆」——
            其名源於根部苦味似龍之膽，是為苦味藥草，因其適應高山氣候以及晚秋綻放，被賦予孤高與內斂的意象，同時也象徵堅韌與時光流逝的哀愁。倘若能承龍膽之苦，方得其髓。
            {/* <br />
            <br /> */}
            {/* <div className="text-center">『愛上憂傷時的你』</div> */}
          </div>
          <div className="mx-auto h-32 w-[1px] bg-black" />
          <Link
            href="/all-album"
            className="group hover:text-main active:text-deeper mx-auto mb-48 flex h-24 animate-pulse items-center"
          >
            <div className="px-3">ALL-ALBUM</div>
            <ChevronsRight
              size={20}
              className="transition-transform group-hover:translate-x-1 group-hover:delay-100"
            />
          </Link>
        </div>
        <Sidebar />
      </section>
    </>
  );
}
