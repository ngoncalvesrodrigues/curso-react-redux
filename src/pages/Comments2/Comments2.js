import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentList } from "../../store/actions/comments";

const Comments2 = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const commentsRedux = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchCommentList(params.id));
  }, [params, dispatch]);

  const { commentList, fetchingCommentList } = commentsRedux;

  return fetchingCommentList ? (
    "Cargando comentarios" //spinner
  ) : (
    <div style={{ textAlign: "left" }}>
      {Array.isArray(commentList) &&
        commentList.map(({ id, name, email, body }) => (
          <div>
            <h3>{`Comment: ${id}`}</h3>
            <div>
              <strong>Name: </strong>
              <span>{name}</span>
            </div>
            <div>
              <strong>Email: </strong>
              <span>{email}</span>
            </div>
            <div>
              <strong>Comment: </strong>
              <span>{body}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments2;
