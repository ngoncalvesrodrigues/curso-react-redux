import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../routes";

const DetailPost = ({ post: { userId, id, title, body } }) => {
  const history = useHistory();
  const myStyle = { marginTop: "1rem" };

  const verComentarios = (e) => {
    e.preventDefault();
    history.push(`${ROUTES.COMMENTS}/${id}`);
  };

  return (
    <form style={myStyle} onSubmit={verComentarios}>
      <div style={myStyle}>
        <label>User Id</label>
        <input value={userId} />
      </div>
      <div style={myStyle}>
        <label>Id</label>
        <input value={id} />
      </div>
      <div style={myStyle}>
        <label>title</label>
        <input value={title} />
      </div>
      <div style={myStyle}>
        <label>body</label>
        <textarea value={body} />
      </div>
      <div style={myStyle}>
        <button type="submit">Ver comentarios</button>
      </div>
    </form>
  );
};

export default DetailPost;
