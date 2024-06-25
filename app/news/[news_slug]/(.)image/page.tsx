import { notFound } from "next/navigation";

import { getNewsForSlug } from "@/lib/news";

const InterceptedImagePage = ({
  params,
}: Readonly<{ params: { news_slug: string } }>) => {
  const newsItem = getNewsForSlug(params.news_slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
};

export default InterceptedImagePage;
