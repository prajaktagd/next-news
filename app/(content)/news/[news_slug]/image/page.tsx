import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";

const ImagePage = async ({
  params,
}: Readonly<{ params: { news_slug: string } }>) => {
  const newsItem = await getNewsItem(params.news_slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
