import React from "react";
import { useSelector } from "react-redux";
import { LinksNavegacion } from "./LinksNavegacion";
import { DEFAULT_MENU_COLOR } from "../../theme";

export const Header = ({ color = DEFAULT_MENU_COLOR, userName = "" }) => {
  const title = useSelector((state) => state.header.title);
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
      <div>{title}</div>
      <LinksNavegacion />
      <div>{userName}</div>
    </div>
  );
};
