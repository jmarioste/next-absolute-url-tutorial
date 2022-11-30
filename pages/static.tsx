import { GetStaticProps, NextPage } from "next";
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
