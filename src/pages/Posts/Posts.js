import React, { useState, useEffect } from "react";
import axios from "axios";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);

  const SelectPosts = ({ posts }) => (
    <select>
      {posts.map(({ id, title }) => (
        <option key={id} value={id}>
          {title}
        </option>
      ))}
    </select>
  );

  const DetailPost = ({ post }) => <div>Detalle Posts</div>;

  return (
    <div>
      <SelectPosts posts={posts} />
      <DetailPost post={selectedPost} />
    </div>
  );
};
