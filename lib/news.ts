import sql from "better-sqlite3";

import { NEWS } from "@/data/news";
import NewsItem from "@/models/newsItem";

const db = sql("./data.db");

const getAllNews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM news").all() as Array<NewsItem>;
};

const getLatestNews = () => NEWS.slice(0, 3);

const getAvailableNewsYears = () =>
  NEWS.reduce((years: Array<number>, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((second, first) => first - second);

const getAvailableNewsMonths = (year: number) =>
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

const getNewsForSlug = (slug: string) =>
  NEWS.find((newsItem) => newsItem.slug === slug);

const getNewsForYear = (year: number) =>
  NEWS.filter((newsItem) => new Date(newsItem.date).getFullYear() === year);

const getNewsForYearAndMonth = (year: number, month: number) =>
  NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === year && newsMonth === month;
  });

export {
  getAllNews,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getLatestNews,
  getNewsForSlug,
  getNewsForYear,
  getNewsForYearAndMonth,
};
