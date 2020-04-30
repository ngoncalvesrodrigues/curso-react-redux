import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export const getComments = (postId) =>
  axios
    .get(`${baseURL}/posts/${postId}/comments`)
    .then((res) => res.data)
    .catch((err) => {
      // console.log(err.message);
      // console.log(err.response.status);
      // console.log(err.response.data);
      // console.log(err.response.headers);
      // generar log
      // procesamiento del error
      throw new Error("Mi mensaje de error");
    });

export const getPosts = () =>
  // renombrar como getPostList()
  axios.get(`${baseURL}/posts`).then((res) => res.data); // parsing complejo

export const getPost = (id) =>
  axios.get(`${baseURL}/posts/${id}`).then((res) => res.data); // parsing complejo
// .catch((err) => {
//   throw new Error("Error Leyendo detalle de posts");
// });
