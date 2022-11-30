import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getAbsoluteUrl, getProtocol } from "../utils/vercel-utils";

type Props = {
  absoluteUrl: string;
};

const SSRPage: NextPage<Props> = ({ absoluteUrl }) => {
  const fromInsideComponent = getAbsoluteUrl();
  return (
    <div>
      <div>getServerSideProps Absolute URL: {absoluteUrl}</div>
      <div>fromInsideComponent Absolute URL: {fromInsideComponent}</div>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/ssr">SSR</Link>
        <Link href="/static">Static</Link>
        <Link href="/api/hello">api/hello</Link>
      </nav>
    </div>
  );
};

export default SSRPage;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  console.log("host", ctx.req.headers.host);
  const absoluteUrl = `${getProtocol()}${ctx.req.headers.host}`;
  return {
    props: {
      absoluteUrl,
    },
  };
};
