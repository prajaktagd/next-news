import { notFound } from "next/navigation";

import { getNewsForSlug } from "@/lib/news";

const ImagePage = ({ params }: Readonly<{ params: { news_slug: string } }>) => {
  const newsItem = getNewsForSlug(params.news_slug);

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
