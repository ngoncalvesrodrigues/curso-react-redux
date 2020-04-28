import React from "react";

const SelectPaises = ({ paises, onSelectPais }) => (
  <div style={{ pading: "1rem" }}>
    <select onChange={(e) => onSelectPais(e.target.value)}>
      {paises.map(({ pais }, index) => (
        <option key={index} value={index}>
          {pais}
        </option>
      ))}
    </select>
  </div>
);

export default SelectPaises;
