import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { setCurrentPage } from "../../Redux/Actions";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const countries = useSelector((state) => state.countries);
  const countriesBdd = useSelector((state) => state.countriesBdd);
  // eslint-disable-next-line
  const currentPage = useSelector((state) => state.currentPage);
  const inicialCountries = countriesBdd.length > 0 ? countriesBdd : countries;
  const totalPage = Math.ceil(inicialCountries.length / 10);

  const [currentCard, setCurrentCard] = useState([inicialCountries]);
  const previusPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
  const nextPage = () => {
    if (currentPage < totalPage) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };
  useEffect(() => {
    const starIndex = (currentPage - 1) * 10;
    const endIndex = starIndex + 10;
    setCurrentCard(inicialCountries.slice(starIndex, endIndex));
  }, [currentPage, inicialCountries]);
  return (
    <div>
      <div className={style.container}>
        {currentCard.map((country, index) => (
          <Card key={index} {...country} />
        ))}
      </div>
      
      <button className={style.btn} onClick={previusPage}>Anterior</button>
      <button className={style.btn} onClick={nextPage}>Siguiente</button>
    </div>
  );
};

export default CardsContainer;
