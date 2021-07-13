import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const homePageStyles = {
  height: "100vh",
};

export default function Home() {
  return (
    <div style={homePageStyles}>
      <Head>
        <title>Mariposa Wellness</title>
        <meta name="description" content="Physical Therapy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Welcome to Mariposa Wellness</h3>
      <div>
        <p>
          At Mariposa Wellness I combine a variety of manual medicine modalities
          to treat the whole person. With an expertise in Pelvic Health and
          almost 20 years experience as a physical therapist my goal is to
          provide treatment to enhance your overall movement and function while
          empowering you with knowledge regarding your body and particular
          condition and techniques for self care.
        </p>
      </div>
    </div>
  );
}
