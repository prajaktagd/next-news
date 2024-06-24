import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = ({
  params,
}: Readonly<{ params: { year_slug: string } }>) => {
  const year = parseInt(params.year_slug);
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
};

export default FilteredNewsPage;
