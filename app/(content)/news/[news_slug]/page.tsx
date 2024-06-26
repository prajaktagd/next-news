import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";
import Link from "next/link";

const NewsDetailsPage = async ({
  params,
}: Readonly<{ params: { news_slug: string } }>) => {
  const newsSlug = params.news_slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsSlug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
