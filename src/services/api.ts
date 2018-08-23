export const requests = {
  get: (url: string) => {
    const config = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(url, config)
      .then(response => response.json())
      .catch(error => console.error(`GET[${url}] failed =\n`, error));
  },
  post: (url: string, body = {}) => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    return fetch(url, config)
      .then(response => response.json())
      .catch(error => console.error(`POST[${url} failed =\n`, error));
  },
}

export const Posts = {
  all: () => requests.get('/posts?_sort=id&_order=desc'),
  add: ({ title, body, }) => requests.post('/posts', { title, body }),
  findOne: id => requests.get(`/posts/${id}`),
}
