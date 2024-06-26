import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

const FilteredNewsPage = async ({
  params,
}: Readonly<{ params: { filter: Array<string | undefined> | undefined } }>) => {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  const availableYears = await getAvailableNewsYears();

  const isInvalidYear = selectedYear && !availableYears.includes(selectedYear);
  const isInvalidMonth =
    selectedYear &&
    selectedMonth &&
    !getAvailableNewsMonths(selectedYear).includes(selectedMonth);

  if (isInvalidYear || isInvalidMonth) {
    throw Error("Invalid filter!");
  }

  const navItems = !selectedYear
    ? availableYears
    : !selectedMonth
    ? getAvailableNewsMonths(selectedYear)
    : [];

  const news = !selectedYear
    ? []
    : !selectedMonth
    ? await getNewsForYear(selectedYear)
    : await getNewsForYearAndMonth(selectedYear, selectedMonth);

  const navItemHtml = (navItem: string) => {
    const href = selectedYear
      ? `/archive/${selectedYear}/${navItem}`
      : `/archive/${navItem}`;
    return (
      <li key={navItem}>
        <Link href={href}>{navItem}</Link>
      </li>
    );
  };

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>{navItems.map(navItemHtml)}</ul>
        </nav>
      </header>
      {news.length === 0 ? <p>No news found.</p> : <NewsList news={news} />}
    </>
  );
};

export default FilteredNewsPage;
