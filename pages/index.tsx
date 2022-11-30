import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tutorial for NextJS Absolute URL</title>
        <meta name="description" content="Tutorial for NextJS Absolute URL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/ssr">SSR</Link>
        <Link href="/static">Static</Link>
        <Link href="/api/hello">api/hello</Link>
      </nav>
    </div>
  );
};

export default Home;
