import { PostEntity, PostListEntity } from "src/model";

export const requests = {
  get: (url: string) => {
    const config = {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    };
    return fetch(url, config)
      .then(response => response.json())
      .catch(error => {
        // tslint:disable-next-line
        console.error(`GET[${url}] failed =\n`, error);
      });
  },
  post: (url: string, body: any) => {
    const config = {
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    };
    return fetch(url, config)
      .then(response => response.json())
      .catch(error => {
        // tslint:disable-next-line
        console.error(`POST[${url} failed =\n`, error);
      });
  }
};

export const Posts = {
  add: ({
    title,
    body
  }: {
    title: string;
    body: string;
  }): Promise<PostEntity> => {
    return requests.post("/posts", { title, body });
  },
  all: (): Promise<PostListEntity> =>
    requests.get("/posts?_sort=id&_order=desc"),
  findOne: (id: string): Promise<PostEntity> => requests.get(`/posts/${id}`)
};
