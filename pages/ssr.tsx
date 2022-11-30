import { GetServerSideProps, NextPage } from "next";
import { getAbsoluteUrl } from "../utils/vercel-utils";

type Props = {
  absoluteUrl: string;
};

const SSRPage: NextPage<Props> = ({ absoluteUrl }) => {
  const fromInsideComponent = getAbsoluteUrl();
  return (
    <div>
      <div>getServerSideProps Absolute URL: {absoluteUrl}</div>
      <div>fromInsideComponent Absolute URL: {fromInsideComponent}</div>
    </div>
  );
};

export default SSRPage;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: {
      absoluteUrl: getAbsoluteUrl() ?? "",
    },
  };
};
