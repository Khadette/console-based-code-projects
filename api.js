// api.js

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Named export
export { fetchPosts };