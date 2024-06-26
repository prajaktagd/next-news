import { Suspense } from "react";

import FilterHeader from "@/components/filter-header";
import FilteredNews from "@/components/filtered-news";

const FilteredNewsPage = async ({
  params,
}: Readonly<{ params: { filter: Array<string | undefined> | undefined } }>) => {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
