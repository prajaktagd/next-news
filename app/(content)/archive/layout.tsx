import { ReactElement } from "react";

const ArchiveLayout = ({
  archive,
  latest,
}: Readonly<{ archive: React.ReactNode; latest: React.ReactNode }>) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-news">{archive}</section>
      <section id="latest-news">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
