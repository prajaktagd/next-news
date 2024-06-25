import { ReactElement } from "react";

const NewsDetailsLayout = ({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailsLayout;
