import React, { useState, useEffect } from "react";
import { getComments } from "../../api";

const Comments = ({ match: { params } }) => {
  const [commmentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setCommentList([]);
    // Simular Error
    // setLoading(false);
    // setError("Se ha producido un error en la carga");
    getComments(params.id)
      .then((data) => {
        setCommentList(data);
        setLoading(false);
      })
      .catch((err) => {
        //setError("Error cargando comentarios, contacte al administrador");
        setError(err.message);
        setLoading(false);
      });
  }, [params]);

  const Error = ({ error }) => <div style={{ color: "red" }}>{error}</div>;

  return loading ? (
    "Cargando comentarios" //spinner
  ) : (
    <div style={{ textAlign: "left" }}>
      {commmentList.map(({ id, name, email, body }) => (
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
      {error && <Error error={error} />}
    </div>
  );
};

export default Comments;
