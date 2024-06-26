import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = async () => {
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={await getLatestNews()} />
    </>
  );
};

export default LatestNewsPage;
