import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import NewsList from "./news-list";

const FilteredNews = async ({
  year,
  month,
}: Readonly<{
  year: string | undefined;
  month: string | undefined;
}>) => {
  const news = !year
    ? []
    : !month
    ? await getNewsForYear(year)
    : await getNewsForYearAndMonth(year, month);

  return news.length === 0 ? <p>No news found.</p> : <NewsList news={news} />;
};

export default FilteredNews;
