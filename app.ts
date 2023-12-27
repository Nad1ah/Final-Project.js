function createPostElement(post) {
  // ...
}

function createCommentElement(comment) {
  // ...
}

// Funções para comunicação com o servidor
async function fetchPosts() {
  // ...
}

async function fetchComments(postId) {
  // ...
}

// Funções para lidar com ações do usuário
function handleSearch() {
  // ...
}

function handlePostSubmit(event) {
  // ...
}

// Manipulações do DOM para exibir os posts e comentários
const feed = document.getElementById("feed");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", handleSearch);
document
  .getElementById("postForm")
  .addEventListener("submit", handlePostSubmit);

fetchPosts().then((posts) => {
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    feed.appendChild(postElement);

    fetchComments(post.id).then((comments) => {
      comments.forEach((comment) => {
        const commentElement = createCommentElement(comment);
        postElement.appendChild(commentElement);
      });
    });
  });
});
