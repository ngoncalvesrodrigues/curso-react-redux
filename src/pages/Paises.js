import React, { useState, useEffect } from "react";
import datosPaises from "../api/datosPaises";
import SelectPaises from "../components/SelectPaises";

const Paises = () => {
  const [paises, setPaises] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);
  // setTitulo('Paises')
  // componentDidMount
  useEffect(() => {
    console.log("Carga de paises");
    setPaises(datosPaises);
  }, []);

  const handleSelectPais = (indice) => setPaisSeleccionado(paises[indice]);

  const DetallePais = ({ pais: { pais, capital } }) =>
    `La capital de ${pais} es ${capital}`;

  return (
    <div>
      <SelectPaises paises={paises} onSelectPais={handleSelectPais} />
      {paisSeleccionado && <DetallePais pais={paisSeleccionado} />}
    </div>
  );
};

export default Paises;
