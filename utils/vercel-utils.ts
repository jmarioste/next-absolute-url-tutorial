const IS_PRODUCTION = process.env.VERCEL_ENV === "production";
const IS_SERVER = typeof window === "undefined";

export function getProtocol() {
  if (IS_PRODUCTION) return "https://";
  return "http://";
}

export function getAbsoluteUrl() {
  //get absolute url in client
  if (!IS_SERVER) {
    return location.origin;
  }

  //get absolute url in server. getStaticProps, getServerSideProps, /api route
  const protocol = getProtocol();
  if (process.env.VERCEL_URL) {
    return `${protocol}${process.env.VERCEL_URL}`;
  }
}
