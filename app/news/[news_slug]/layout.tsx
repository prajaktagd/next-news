import { ReactElement } from "react";

const NewsDetailsLayout = ({
  children,
  modal,
}: Readonly<{ children: ReactElement; modal: ReactElement }>) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailsLayout;
