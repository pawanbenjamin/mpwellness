import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mariposa Wellness</title>
        <meta name="description" content="Physical Therapy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}
