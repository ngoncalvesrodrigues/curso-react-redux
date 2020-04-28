import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export const LinksNavegacion = () => {
  const styleLink = {
    padding: "1rem",
  };
  return (
    <div>
      <Link style={styleLink} to={ROUTES.HOME}>
        Home
      </Link>
      <Link style={styleLink} to={ROUTES.DAY1}>
        Day1
      </Link>
      <Link style={styleLink} to={ROUTES.DAY2}>
        Day2
      </Link>
      <Link style={styleLink} to={ROUTES.PAISES}>
        Paises
      </Link>
      <Link style={styleLink} to={ROUTES.POSTS}>
        Posts
      </Link>
    </div>
  );
};
