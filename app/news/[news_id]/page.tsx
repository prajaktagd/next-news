"use client";

const NewsDetailsPage = ({
  params,
}: Readonly<{ params: { news_id: string } }>) => {
  const path = params.news_id;
  return <p>News Item {path}</p>;
};

export default NewsDetailsPage;
