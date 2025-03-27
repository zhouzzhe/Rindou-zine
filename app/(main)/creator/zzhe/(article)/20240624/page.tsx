import ImageBox from "@/app/components/imageBox";

export default function tainan() {
  return (
    <>
      <section className="flex grow flex-col p-20">
        <div className="mb-5 border-b border-gray-700">
          <div className="text-sm leading-3 text-gray-600">2024/06/24</div>
          <h1>《台南圖書總館》</h1>
        </div>
        <ImageBox src="photo1" title="我是標題" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero
          quis repellat facilis animi, fuga itaque fugit tempora sequi officia,
          magni velit similique culpa quod optio neque libero molestias veniam!
        </div>
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
