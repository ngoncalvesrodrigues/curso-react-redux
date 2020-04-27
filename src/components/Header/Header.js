import React from "react";
import { DEFAULT_TITLE } from "./Header.constants";
import { DEFAULT_MENU_COLOR } from "../../theme";

export const Header = ({
  titulo = DEFAULT_TITLE,
  color = DEFAULT_MENU_COLOR,
  userName = "",
}) => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: color,
    color: "white",
    padding: "1rem",
    marginBottom: "1rem",
  };
  console.log("header - usuario: ", userName);
  return (
    <div style={headerStyle} classNamex="Header-app">
      <div>{titulo}</div>
      <div>{userName}</div>
    </div>
  );
};
