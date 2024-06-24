import Link from "next/link";

import NewsItem from "@/models/newsItem";

const NewsList = ({ news }: Readonly<{ news: Array<NewsItem> }>) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => {
        return (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
