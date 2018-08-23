export const requests = {
  get: (url: string) => {
    const config = {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    };
    return fetch(url, config)
      .then(response => response.json())
      .catch(error => console.error(`GET[${url}] failed =\n`, error));
  },
  post: (url: string, body = {}) => {
    const config = {
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    };
    return fetch(url, config)
      .then(response => response.json())
      .catch(error => console.error(`POST[${url} failed =\n`, error));
  }
};

export const Posts = {
  all: () => requests.get("/posts?_sort=id&_order=desc"),
  add: ({ title, body }) => requests.post("/posts", { title, body }),
  findOne: id => requests.get(`/posts/${id}`)
};
