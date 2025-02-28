import { createStore, createEffect, createEvent } from "effector";
import axios from "axios";

// TODO: вынести в папку api папка service

//#region move
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchDataFx = createEffect<void, Post[], Error>(async () => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const fetchPosts = createEvent();
fetchPosts.watch(() => {
  fetchDataFx();
  fetchDataFx.fail.watch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });
});

//#endregion move

export const $posts = createStore<Post[]>([]).on(
  fetchDataFx.doneData,
  (_, posts) => posts
);
