import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { getAbsoluteUrl } from "../utils/vercel-utils";

type Props = {
  absoluteUrl: string;
};
const StaticPage: NextPage<Props> = ({ absoluteUrl }) => {
  const fromInsideComponent = getAbsoluteUrl();
  return (
    <div>
      <div>getStaticProps Absolute URL: {absoluteUrl}</div>
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

export default StaticPage;

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  return {
    props: {
      absoluteUrl: getAbsoluteUrl() ?? "",
    },
  };
};
