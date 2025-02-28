import { useUnit } from "effector-react";
import { fetchPosts, $posts } from "./model";
import { Button } from "../../components/Button/Button";
import { Table } from "../../components/Table/Table";
import "./TableView.scss";

// TODO: сделать более переиспользуемый компонент, логику эффектора вынести во view

export function TableView() {
  const posts = useUnit($posts);

  return (
    <div>
      <Button onClick={fetchPosts} label="Получить данные" />
      <Table
        data={posts}
        renderItem={(post) => (
          <div className={"postContainer"}>
            <div className={"containerHeader"}>
              <p className={"headerItem"}>id: {post.id}</p>
              <p className={"headerItem"}>user: {post.userId}</p>
              <h4 className={"headerPostTitle"}>{post.title}</h4>
            </div>
            <p className={"postBody"}>{post.body}</p>
          </div>
        )}
      />
    </div>
  );
}
