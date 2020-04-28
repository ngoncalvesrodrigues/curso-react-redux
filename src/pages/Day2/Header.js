import React, { useState } from "react";
import InputParrafo from "../../components/InputParrafo";
import ListaPalabras from "../../components/ListaPalabras";

const Day2 = (props) => {
  const [palabras, setPalabras] = useState([]);
  console.log(props);
  // const palabras = [{ texto: "palabra", longitud: 7 }];

  const handleProcessPalabras = (parrafo) => {
    const palabrasArray = parrafo.split(" ");
    const palabrasObj = palabrasArray.map((palabra) => {
      return { texto: palabra, longitud: palabra.length };
    });
    setPalabras(palabrasObj);
  };

  const textArrayToDisplay = palabras.map(
    ({ texto, longitud }) => `${texto} (${longitud})`
  );

  return (
    <>
      <InputParrafo onSubmitPalabras={handleProcessPalabras} />
      <ListaPalabras listaTexto={textArrayToDisplay} />
    </>
  );
};

export default Day2;
