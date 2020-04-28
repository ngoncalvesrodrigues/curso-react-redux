import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../routes";

const InputParrafo = ({ onSubmitPalabras, ...restoDeProps }) => {
  const [texto, setTexto] = useState("");
  const history = useHistory();

  const handleChangeText = (e) => {
    const textoArea = e.target.value;
    setTexto(textoArea);
    onSubmitPalabras(textoArea);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmitPalabras(texto);
    history.push(ROUTES.HOME);
  };

  console.log("input parrafo");
  return (
    <form onSubmit={handleSubmit}>
      <label>Texto</label>
      <textarea
        name="textArea"
        value={texto}
        onChange={handleChangeText}
      ></textarea>
      <button type="submit">Ir a Home</button>
    </form>
  );
};

export default InputParrafo;
