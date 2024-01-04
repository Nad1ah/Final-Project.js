
document.addEventListener('DOMContentLoaded', function() {

const searchInput = document.querySelector("#searchInput");
const resultsContainer = document.querySelector(".results");
let pageNumber = 1;
const divContent = document.querySelector("#feed");
const timeData = document.querySelector("time-date")
const postComment = document.querySelector("#postForm");


const usersData = fetch(
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json"
);
const postsData = fetch(
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json"
);

function postsData {[]
  [
    {
      title: 'Diário de Férias',
      body: 'Este verão estive de férias no Algarve e diverti-me imenso. Visitámos a praia e o campo.',
      createdAt: '2023-12-15T21:13:11.905Z',
      likes: [14254, 24356, 46577],
      comments: [
        {
          userId: 14254,
          body: 'Bom contéudo lol',
          createdAt: '2023-12-15T21:13:11.905Z',
        },
        {
          userId: 24356,
          body: 'Para a próxima tens de ir às dunas',
          createdAt: '2023-12-15T21:13:11.905Z',
        },
      ],
    },
  
  ]
}
 function usersData {
  [
    {
      id: 14254,
      name: 'João',
      picture : 'https://placehold.co/400?text=J',
    },
    ]
 }
 
 const clock = new Date("");
 document.getElementById("timeData").innerHTML = clock;

 
});





// const usersData = fetch(
//   "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json"
// );
// const postsData = fetch(
//   "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json"
// ); */

/* document.addEventListener("DOMContentLoaded", fetchDataAndDisplayPosts);
async function getUserPosts(userId) {
  const response = await fetch(
    `https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json`
  );

  if (!response.ok) {
    throw new Error("Error fetching user posts");
  }

  const postsData = await response.json();
  return postsData;
}

async function getUserDetails(userId) {
  fetch(
    "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json"
  );
  return usersData;
}

async function getUserDetails(userId) {
  const response = await fetch(
    `https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json`
  );

  if (!response.ok) {
    throw new Error("Error fetching user details");
  }

  const userDetails = await response.json();
  return userDetails;
}

function createPostElement(postData) {
  const post = document.createElement("div");
  post.className = "post";

  return post;
}

async function fetchDataAndDisplayPosts() {
  const userId = 2;

  try {
    const userPosts = await getUserPosts(userId);
    const userDetails = await getUserDetails(userId);

    const profileImage = document.getElementById("profile-image");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAndDisplayPosts();

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
  results.innerText = `Results: ${numPostsFound}`;
} */

/* import "./app";
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
 */
