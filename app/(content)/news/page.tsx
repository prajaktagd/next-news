import NewsList from "@/components/NewsList";

const NewsPage = async () => {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch the news.");
  }
  const news = await response.json();

  return (
    <>
      <h1>Headlines</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
