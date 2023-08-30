// import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getCountriesId } from "../../Redux/Actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const {name, continents, capital, flag, area, population, subregion, activities} = useSelector((state)=> state.countriesDetail)
  
  useEffect(() => {
  dispatch(getCountriesId(id))
  }, [dispatch, id]);
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>Detalle del Pais</h1>
        <div className={style.infoContainer}>
        <h1 className={style.subtitle}>Nombre: {name}</h1>
        <h2 className={style.subtitle}>Id:{id}</h2>
        <h4 className={style.subtitle}>Nombre del Continente: {continents}</h4>
        <h5 className={style.subtitle}>Capital: {capital}</h5>
        <h6 className={style.subtitle}>Subregion: {subregion}</h6>
        <h6 className={style.subtitle}>Area: {area} km²</h6>
        <div className={style.img}>
          <img src={flag} alt={name} />
        </div>
        <h6 className={style.subtitle}> <br />Poblacion: {population}</h6>
        <h6 className={style.activities} >Actividad Turistica:</h6>
        {activities && activities.length>0 && 
              activities.map((act) => (
                <li key={act.id}>
                    {act.name} ({act.season}) | Duracion:{' '}
                    {act.duration} - Difilcultad: {act.difficulty}
                </li>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
