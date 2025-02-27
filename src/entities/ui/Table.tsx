import { useStoreMap } from "effector-react";
import { fetchPosts, $posts } from "./model";
import styles from "../../styles/Table.module.css";

export function Table() {
  const posts = useStoreMap({
    store: $posts,
    keys: [],
    fn: (state) => state,
  });

  return (
    <div>
      <button onClick={() => fetchPosts()} className={styles.button}>
        Получить данные
      </button>
      <div>
        {posts.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <div className={styles.containerHeader}>
              <p className={styles.headerItem}>id: {post.id}</p>
              <p className={styles.headerItem}>user: {post.userId}</p>
              <h4 className={styles.headerPostTitle}>{post.title}</h4>
            </div>
            <p className={styles.postBody}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
