import Link from "next/link";

const MainHeader = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/news">News</Link>
      </li>
    </ul>
  );
};

export default MainHeader;
