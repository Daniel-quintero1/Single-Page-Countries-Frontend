import { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getCountriesByName, setCurrentPage } from "../../Redux/Actions";

const SearchBar = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const handlerInput = (e) => {
    setCountry(e.target.value);
  };
  const handlerSearch = (e) => {
    e.preventDefault();
    dispatch(getCountriesByName(country));
    setCountry("")
    dispatch(setCurrentPage(1))
  };
  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Escribe el Pais"
        value={country}
        className={style.input}
        onChange={handlerInput}
      />
      <button className={style.button} onClick={handlerSearch}>Busca El Pais</button>
    </div>
  );
};

export default SearchBar
