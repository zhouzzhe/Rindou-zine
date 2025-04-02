interface ArticleBoxProp {
  className?: string;
  article: string;
}

export default function ArticleBox({ ...arg }: ArticleBoxProp) {
  return (
    <>
      <div className={`mx-auto mb-8 w-10/12 ${arg.className}`}>
        {arg.article}
      </div>
    </>
  );
}
