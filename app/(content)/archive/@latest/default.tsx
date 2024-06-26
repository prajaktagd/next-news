import NewsList from "@/components/NewsList";
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
