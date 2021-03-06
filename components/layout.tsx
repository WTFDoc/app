import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Trending from "./trending";

const name = "WTFDoc";
export const siteTitle = "WTFDoc";

const trending = Date.now().toString();
console.log(trending);

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/fav.ico" />
        <meta
          name="description"
          content="WTFDoc: A new generation of unproductivity tool"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div>{name}</div>
            <div>¯\_(ツ)_/¯</div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <div>{name}</div>
                <div>¯\_(ツ)_/¯</div>
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      <Trending/>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
