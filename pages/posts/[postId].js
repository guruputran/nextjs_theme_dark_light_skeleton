/** @format */

import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
export default function Post() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  const handleClick = () => {
    router.push("/posts");
  };
  return (
    <div className={styles.container}>
      <h1>Single post page</h1>
      <h3>This is post {data.postId}</h3>
      <button onClick={handleClick}>See all posts</button>
    </div>
  );
}
