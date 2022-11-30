import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const absoluteUrl = new URL("/", req.url).toString();
  console.log("Middleware", absoluteUrl);
}
