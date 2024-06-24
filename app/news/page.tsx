import Link from "next/link";
import Image from "next/image";

import { NEWS } from "@/data/news";

const NewsPage = () => {
  return (
    <ul className="news-list">
      {NEWS.map((newsItem) => {
        return (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
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
