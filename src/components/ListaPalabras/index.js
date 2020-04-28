import React from "react";

const ListaPalabras = ({ listaTexto }) => {
  return (
    <>
      {listaTexto.map((texto, index) => (
        <li key={index}>{texto}</li>
      ))}
    </>
  );
};

export default ListaPalabras;
