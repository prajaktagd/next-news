"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import { NEWS } from "@/data/news";

const NewsDetailsPage = ({
  params,
}: Readonly<{ params: { news_slug: string } }>) => {
  const newsSlug = params.news_slug;
  const newsItem = NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
