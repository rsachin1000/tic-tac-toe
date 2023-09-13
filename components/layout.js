import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Tic-Tac-Toe";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Building a simple browser tic-tac-toe game with memory."
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <h1>Welcome to Tic-Tac-Toe</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
