import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  return (
    <>
      <h1>Headlines</h1>
      <NewsList news={await getAllNews()} />
    </>
  );
};

export default NewsPage;
