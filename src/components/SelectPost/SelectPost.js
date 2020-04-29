import React from "react";

// {(e) => onSelectPost(e.target.value)}>
const SelectPosts = ({ posts, onSelectPost }) => (
  <select onChange={(e) => onSelectPost(e.target.value)}>
    {posts.map(({ id, title }) => (
      <option key={id} value={id}>
        {title}
      </option>
    ))}
  </select>
);

export default SelectPosts;
