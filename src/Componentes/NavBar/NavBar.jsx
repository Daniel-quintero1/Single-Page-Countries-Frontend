import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <div className={style.navContain}>
      <Link to="/home">
        <p className={style.title}>Volver al Inicio</p>
      </Link>
      <SearchBar />
      <Link to="/form">
        <p className={style.title}>Crear Actividad</p>
      </Link>
      <Link to="/">
        <p className={style.title}>Salir</p>
      </Link>
    </div>
  );
};

export default NavBar;
