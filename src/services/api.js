export const requests = {
  get: (url) => {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(url, config)
      .then(response => response.json())
      .catch(error => console.error(`GET[${url}] failed =\n`, error))
  }
}

export const Posts = {
  getAll: () => requests.get('/posts')
}