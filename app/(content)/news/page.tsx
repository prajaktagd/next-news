"use client";

import NewsList from "@/components/NewsList";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:8080/news")
      .then(async (response) => {
        setIsLoading(false);
        setNews(await response.json());
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <>
      <h1>Headlines</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Failed to fetch the news.</p>
      ) : (
        <NewsList news={news} />
      )}
    </>
  );
};

export default NewsPage;
