async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return await response.json();
}

const usersUrl =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json";
const postsUrl =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json";

const users = await fetchData(usersUrl);
const posts = await fetchData(postsUrl);

function createPostElement(post: any): HTMLElement {
  return article;
}
const feed = document.getElementById("feed");

posts.forEach((post) => {
  const postElement = createPostElement(post);
  feed.appendChild(postElement);

  post.comments.forEach((comment) => {
    const commentElement = commentElement(comment);
    postElement.appendChild(commentElement);
  });
});
function handleSearch(event: Event): void {
  // ...
}
function handlePostSubmit(event: Event): void {
  // ...
}
// Add event listeners to the search box and submit button
const searchButton = document.getElementById("searchButton");
searchButton?.addEventListener;
searchButton.addEventListener("click", handleSearch);
document
  .getElementById("postForm")

  .addEventListener("submit", handlePostSubmit);
export {};
