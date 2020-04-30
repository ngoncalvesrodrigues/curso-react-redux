import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../store/actions/header";
import { fetchPostList, fetchPost } from "../../store/actions/posts";
import SelectPosts from "../../components/SelectPost";
import DetailPost from "../../components/DetailPost";

export const Posts2 = () => {
  // const postList = useSelector((state) => state.posts.postList);
  // const selectedPost = useSelector((state) => state.posts.selectedPost);
  // const fetchingPostList = useSelector((state) => state.posts.fetchingPostList);
  const postsRedux = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("POSTS REDUX"));
    dispatch(fetchPostList());
  }, []);

  const handleSelectPost = (id) => {
    dispatch(fetchPost(id));
  };

  const Spinner = ({ texto }) => <div>{`Cargando ${texto}`}</div>;

  return (
    <div>
      {!postsRedux.fetchingPostList ? (
        <SelectPosts
          posts={postsRedux.postList}
          onSelectPost={handleSelectPost}
        />
      ) : (
        <Spinner texto="Lista Posts" />
      )}

      {!postsRedux.fetchingPost ? (
        <DetailPost post={postsRedux.selectedPost} post2 />
      ) : (
        <Spinner texto="Detalle del Post" />
      )}
    </div>
  );
};
