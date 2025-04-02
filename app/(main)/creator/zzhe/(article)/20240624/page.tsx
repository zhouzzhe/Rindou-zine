import ArticleBox from "@/app/components/articleBox";
import ImageBox from "@/app/components/imageBox";

export default function tainan() {
  return (
    <>
      <section className="flex grow flex-col p-20">
        <div className="border-gray-70 mb-5 flex w-full flex-col items-center justify-center border-b">
          <h1>《台南圖書總館》</h1>
          <span className="text-gray-600 mb-1">2024/06/24</span>
        </div>
        <ArticleBox className="mt-10" article="佇立於台南台南市永康區的圖書館新總館，"/>
        <ImageBox src="photo1" title="我是標題" />
        <ArticleBox article="test"/>
        <ArticleBox article="test"/>
        <ArticleBox article="test"/>
        <ImageBox src="photo2" title="我是標題" />
        <ImageBox src="photo3" title="我是標題" />
        <ImageBox src="photo5" title="我是標題" />
        <ImageBox src="photo6" title="我是標題" />
        <ImageBox src="photo7" title="我是標題" />
        <ImageBox src="photo8" title="我是標題" />
        <ImageBox src="photo9" title="我是標題" />
        <ImageBox src="photo10" title="我是標題" />
      </section>
    </>
  );
}
