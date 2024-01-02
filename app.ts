// import { User, Post, Comment } from ""
// async function getUsers(): Promise<User[]> {
//   const response = await fetch(
//     "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json"
//   );
//   return response.json();
// }

// async function getPosts(): Promise<Post[]> {
//   const response = await fetch(
//     "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json"
//   );
//   return response.json();
// }

// async function getUserById(id: number): Promise<User> {
//   const users = await getUsers();
//   return users.find((user) => user.id === id);
// }

// async function filterPostsByTitle(title: string): Promise<Post[]> {
//   const posts = await getPosts();
//   return posts.filter((post) => post.title.includes(title));
// }

// function createPost(title: string, body: string): Post {
//   const post: Post = {
//     id: Math.floor(Math.random() * 1000000000), // gerar um ID aleatório
//     title: title,
//     body: body,
//     userId: 1, // supondo que todos os posts são criados pelo mesmo utilizador
//     comments: [],
//     likes: [],
//     createdAt: new Date(),
//   };

//   return post;
// }
