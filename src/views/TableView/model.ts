import { createStore } from "effector";
import { fetchDataFx, Post } from "../../services/api";

export const $posts = createStore<Post[]>([]).on(
  fetchDataFx.doneData,
  (_, posts) => posts
);
