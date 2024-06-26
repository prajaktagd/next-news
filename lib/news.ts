import sql from "better-sqlite3";

import NewsItem from "@/models/newsItem";

const db = sql("./data.db");

interface NewsYear {
  year: string;
}

interface NewsMonth {
  month: string;
}

const getAllNews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM news").all() as NewsItem[];
};

const getNewsItem = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM news WHERE slug = ?").get(slug) as NewsItem;
};

const getLatestNews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as NewsItem[];
};

const getAvailableNewsYears = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as NewsYear[];
  return years.map((year) => year.year);
};

const getAvailableNewsMonths = (year: string) => {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as NewsMonth[];
  return months.map((month) => month.month);
};

const getNewsForYear = async (year: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as NewsItem[];
};

const getNewsForYearAndMonth = async (year: string, month: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as NewsItem[];
};

export {
  getAllNews,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getLatestNews,
  getNewsItem,
  getNewsForYear,
  getNewsForYearAndMonth,
};
