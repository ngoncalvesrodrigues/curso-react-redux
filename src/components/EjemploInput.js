import React from "react";

const EjemploInput = (props) => {
  const { value, onChangeInput } = props;
  console.log("render input", value);
  return (
    <div>
      <input onChange={onChangeInput} value={value} />
      <div>{value}</div>
    </div>
  );
};

export default EjemploInput;
