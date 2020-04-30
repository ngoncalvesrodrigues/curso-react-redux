import React from "react";
import { Link } from "react-router-dom";
import { LINKS } from "./Header.constants";

export const LinksNavegacion = () => {
  const styleLink = {
    padding: "1rem",
  };

  return (
    <div>
      {LINKS.map(({ ruta, texto }, index) => (
        <Link key={index} style={styleLink} to={ruta}>
          {texto}
        </Link>
      ))}
    </div>
  );
};
