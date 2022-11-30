import { GetStaticProps, NextPage } from "next";
import React from "react";
import { getAbsoluteUrl } from "../utils/vercel-utils";

type Props = {
  absoluteUrl: string;
  apiResult: any;
};
const StaticPage: NextPage<Props> = ({ absoluteUrl, apiResult }) => {
  const fromInsideComponent = getAbsoluteUrl();
  return (
    <div>
      <div>getStaticProps Absolute URL: {absoluteUrl}</div>
      <div>fromInsideComponent Absolute URL: {fromInsideComponent}</div>
      <div>
        api Result
        <pre>{JSON.stringify(apiResult, null, 4)}</pre>
      </div>
    </div>
  );
};

export default StaticPage;

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const response = await fetch(new URL("/api/hello", getAbsoluteUrl()));
  const apiResult = await response.json();
  return {
    props: {
      absoluteUrl: getAbsoluteUrl() ?? "",
      apiResult,
    },
  };
};
