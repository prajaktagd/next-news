import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

const NewsPage = () => {
  return (
    <>
      <h1>Headlines</h1>
      <NewsList news={getAllNews()} />
    </>
  );
};

export default NewsPage;
