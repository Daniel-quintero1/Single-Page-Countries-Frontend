import style from "./Landing.module.css";
import gifImage from "../../Imagenes/gif1.gif";
import { Link } from "react-router-dom";

const Landing = () => {

  return (
    <div className={style.Container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Bienvenido</h1>
        <h2 className={style.text}>
          "Entra a nuestra pagina y conoce <br /> más de 200+ Países........."
        </h2>
        <Link to="/home">
         <button className={style.btn}>Ingresar</button>
        </Link>
        <p className={style.footer}>Proyecto Creado Por Daniel Quintero</p>
      </div>
      <img src={gifImage} className={style.gifImage} alt="World Map" />
    </div>
  );
};

export default Landing;
