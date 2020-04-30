import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeError } from "../../store/actions/error";

export const Error = () => {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleDeleteError = (index) => dispatch(removeError(index));

  return (
    <>
      {error.errores.map((texto, index) => (
        <div
          key={index}
          className="Error"
          onClick={() => handleDeleteError(index)}
        >
          {texto}
        </div>
      ))}
    </>
  );
};
