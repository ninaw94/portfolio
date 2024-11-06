import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My first next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <img src="/next.svg" alt="Logo"/><br />
        <h1>Hello next.js</h1>
        <Link href="/counter">Counter</Link>
      </main>
    </>
  );
}
