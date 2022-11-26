/** @format */

import Link from "next/link";
import styles from "@styles/Home.module.css";
export default function Index() {
  return (
    <div className={styles.container}>
      <h1>All posts</h1>
      <p>This page contains the list of all posts in the application</p>
      <ul className={styles.posts}>
        <li>
          <Link href="/posts/A">sample post A</Link>
        </li>
        <li>
          <Link href="/posts/B">sample post B</Link>
        </li>
        <li>
          <Link href="/posts/C">sample post C</Link>
        </li>
      </ul>
    </div>
  );
}
