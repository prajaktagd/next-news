import Link from "next/link";

const NewsPage = () => {
  return (
    <ul>
      <li>
        <Link href="/news/news1">News Item 1</Link>
      </li>
      <li>
        <Link href="/news/news2">News Item 2</Link>
      </li>
      <li>
        <Link href="/news/news3">News Item 2</Link>
      </li>
    </ul>
  );
};

export default NewsPage;
