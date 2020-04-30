import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as api from "../../api";
import { setTitle } from "../../store/actions/header";
import SelectPosts from "../../components/SelectPost";
import DetailPost from "../../components/DetailPost";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("POSTS"));
    api.getPosts().then((data) => {
      setPosts(data);
      api.getPost(data[0].id).then((data) => setSelectedPost(data));
      //setSelectedPost(data[0]);
    });
  }, []);

  const handleSelectPost = (id) => {
    api.getPost(id).then((data) => setSelectedPost(data));
    //setSelectedPost(posts.find((post) => `${post.id}` === id));
  };

  return (
    <div>
      <SelectPosts posts={posts} onSelectPost={handleSelectPost} />
      {selectedPost && <DetailPost post={selectedPost} />}
    </div>
  );
};
