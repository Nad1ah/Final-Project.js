import "./app";
function searchPosts() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();

  const posts = document.getElementsByClassName("post");
  let numPostsFound = 0;

  for (let i = 0; i < posts.length; i++) {
    const postTitle = posts[i]
      .getElementsByTagName("h2")[0]
      .innerText.toLowerCase();

    if (postTitle.includes(searchTerm)) {
      posts[i].style.display = "block";
      numPostsFound++;
    } else {
      posts[i].style.display = "none";
    }
  }

  const results = document.getElementById("results");
  results.textContent = `${numPostsFound} post(s) encontrado(s)`;
}
