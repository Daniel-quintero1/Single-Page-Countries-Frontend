import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useEffect} from "react";
import { getCountries} from "../../Redux/Actions";
import style from "./CardsContainer.module.css";
import Pagination from "../Pagination/Pagination";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const currentPage = useSelector((state) => state.currentPage);
  const itemPerPage = 12;

  useEffect(() => {
    try {
      dispatch(getCountries());
    } catch (error) {
      console.log("Error al Obtener los datos de los Paises",error);
    }
  }, [dispatch]);
  const starIndex = (currentPage - 1) * itemPerPage
  const endIndex = starIndex + itemPerPage
  const countriesShow = countries.slice(starIndex, endIndex)
  if(countriesShow.length === 0 ) {
    return <div>No hay Herramientas para mostrar en esta Pagina.</div>
  }
  return (
    <div>
      <div>
        <Pagination />
      </div>
      <div className={style.container}>
        {countriesShow.map((country, index) => (
          <Card key={index} {...country} />
        ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default CardsContainer;
