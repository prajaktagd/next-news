import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = () => {
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={getLatestNews()} />
    </>
  );
};

export default LatestNewsPage;
