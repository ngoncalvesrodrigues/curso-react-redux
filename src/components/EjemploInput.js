import React, { useEffect, useState } from "react";
import { getPosts } from "../api";

const EjemploInput = (props) => {
  const { value, onChangeInput } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  console.log("render input", value);
  console.log("posts: ", posts);
  return (
    <div>
      <input onChange={onChangeInput} value={value} />
      <div>{value}</div>
    </div>
  );
};

export default EjemploInput;
