import FirstImage from "./components/firstImage";
import Sidebar from "./components/sidebar";
import SubSidebar from "./components/subsidebar";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-red-200">
        {/* <Image
          src={imageSrc}
          alt={arg.label || "大圖"}
          fill
          className="object-cover pointer-events-none select-none"
        /> */}
      </div>
      {/* 介紹 */}
      <section className="mx-auto flex max-w-[1440px] justify-center">
        <SubSidebar />
        <div className="vertical-rl mx-auto flex grow justify-center bg-gray-400 p-10 ">
          <div>
            歡迎來到「周哲緯 -
            個人作品集」！這是一個專為展示我的攝影與設計作品而打造的網站，特別聚焦於富士日系風格，呈現柔和的色彩與復古情懷。網站收錄了我的旅行相簿、簡歷以及聯繫資訊，通過直觀的界面和動態效果，讓您輕鬆探索我的創作旅程。無論您是潛在雇主還是攝影愛好者，這裡都能讓您感受到我的熱情與專業。感謝您的蒞臨，期待您的回饋！
          </div>
        </div>
        <Sidebar />
      </section>
    </>
  );
}
