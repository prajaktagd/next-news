"use client";

import { notFound } from "next/navigation";

import { getNewsForSlug } from "@/lib/news";

const NewsDetailsPage = ({
  params,
}: Readonly<{ params: { news_slug: string } }>) => {
  const newsItem = getNewsForSlug(params.news_slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
