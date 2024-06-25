import { NextResponse } from "next/server";

export const middleware = (request: Readonly<Request>) => {
  return NextResponse.next();
};

export const config = {
  matcher: "/news",
};
