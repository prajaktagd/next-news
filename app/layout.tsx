import { ReactElement } from "react";
import "./globals.css";
import MainHeader from "@/components/mainHeader";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

const RootLayout = ({ children }: Readonly<{ children: ReactElement }>) => {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
