<<<<<<< HEAD
import "./index.html";
import http from "http";

import fetch from "node-fetch";
let users: Users[];
let posts: Posts[];

const unknownValue: unknown = getUsers();
if (Array.isArray(unknownValue)) {
  users = unknownValue;
  users = unknownValue.filter((item): item is Users => {
    return typeof item === "object" && item !== null;
  });
} else {
  console.log("O valor desconhecido não é um array");
}

const usersPage =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json";
const postsPage =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json";

async function getData() {
  const users = await getUsers();
  const posts = await getPosts();

  console.log("Users:", users);
  console.log("Posts:", posts);
}

getData();
interface Users {
  id: number;
  name: string;
  picture: string;
}
interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function getUsers(): Promise<Users[]> {
  const a = document.createElement("a");
  a.href = usersPage;

  return new Promise((resolve, reject) => {
    http.get(
      "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json",
      (response) => {
        let data = "";
        response.on("data", (chunk: string) => {
          data += chunk;
        });
        response.on("end", () => {
          resolve(JSON.parse(data));
        });
        response.on("error", (error: any) => {
          reject(error);
        });
      }
    );
  });
}

async function getPosts(): Promise<Posts[]> {
  const a = document.createElement("a");
  a.href = postsPage;

  return new Promise((resolve, reject) => {
    http.get(
      "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json",
      (response) => {
        let data = "";
        response.on("data", (chunk: string) => {
          data += chunk;
        });
        response.on("end", () => {
          resolve(JSON.parse(data));
        });
        response.on("error", (error: any) => {
          reject(error);
        });
      }
    );
  });
}
=======
>>>>>>> 4b27bbffd91516dd85f000d9ed431dcc15c62737
