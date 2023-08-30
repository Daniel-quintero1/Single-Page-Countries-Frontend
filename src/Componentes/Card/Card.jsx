import React from "react";
import style from "./Cards.module.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.card} key={this.props.id}>
        <Link className={style.link} to={`/detail/${this.props.id}`} key={this.props.id}>
          <h2 className={style.country}>{this.props.name}</h2>
        </Link>
        <span className={style.imgContainer}>
          <img
            className={style.img}
            src={this.props.flag}
            alt={`Foto de Bandera ${this.props.name}`}
          />
        </span>
        <div className={style.textContainer}>
          <h3>Continente: {this.props.continents}</h3>
          <h3>Poblacion: {this.props.population}</h3>
          <h3>
            Actividad Turistica :{" "}
            {this.props.activities &&
              this.props.activities.length > 0 &&
              this.props.activities.map((e) => e.name).join(", ")}
          </h3>
        </div>
      </div>
    );
  }
}

export default Card;
