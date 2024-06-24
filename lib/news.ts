import { NEWS } from "@/data/news";

export const getAllNews = () => NEWS;

export const getLatestNews = () => NEWS.slice(0, 3);

export const getAvailableNewsYears = () =>
  NEWS.reduce((years: Array<number>, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((second, first) => first - second);

export const getAvailableNewsMonths = (year: number) =>
  NEWS.reduce((months: Array<number>, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((second, first) => first - second);

export const getNewsForYear = (year: number) =>
  NEWS.filter((news) => new Date(news.date).getFullYear() === year);

export const getNewsForYearAndMonth = (year: number, month: number) =>
  NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth();
    return newsYear === year && newsMonth === month;
  });
