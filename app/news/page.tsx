import Link from "next/link";

import { NEWS } from "@/data/news";

const NewsPage = () => {
  return (
    <ul className="news-list">
      {NEWS.map((newsItem) => {
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

export default NewsPage;
