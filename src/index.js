import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// const element = <div>Hola React elemento</div>;
// const usuario = {
//   nombre: "Luis",
//   appellido: "Perez",
// };

// function fullName(usuario) {
//   return `${usuario.nombre} ${usuario.apellido}`;
// }

// const Componente = () => {
//   return (
//     <div>
//       <div>Cabecera</div>
//       {element}
//       <div>{fullName(usuario)}</div>
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
