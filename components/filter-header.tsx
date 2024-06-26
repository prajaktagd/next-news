import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

const FilterHeader = async ({
  year,
  month,
}: Readonly<{ year: string | undefined; month: string | undefined }>) => {
  const availableYears = await getAvailableNewsYears();

  const isInvalidYear = year && !availableYears.includes(year);
  const isInvalidMonth =
    year && month && !getAvailableNewsMonths(year).includes(month);

  if (isInvalidYear || isInvalidMonth) {
    throw Error("Invalid filter!");
  }

  const navItems = !year
    ? availableYears
    : !month
    ? getAvailableNewsMonths(year)
    : [];

  const navItemHtml = (navItem: string) => {
    const href = year ? `/archive/${year}/${navItem}` : `/archive/${navItem}`;
    return (
      <li key={navItem}>
        <Link href={href}>{navItem}</Link>
      </li>
    );
  };

  return (
    <header id="archive-header">
      <nav>
        <ul>{navItems.map(navItemHtml)}</ul>
      </nav>
    </header>
  );
};

export default FilterHeader;
