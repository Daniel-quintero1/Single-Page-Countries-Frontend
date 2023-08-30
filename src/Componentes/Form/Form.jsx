import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/Actions";
import Validation from "../Validation/Validation";
import axios from "axios";
import style from "../Form/Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const country = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    season: "",
    duration: "",
    countries: [],
  });
  const [error, setError] = useState({
    name: "",
    difficulty: "",
    season: "",
    duration: "",
    countries: "",
  });
  const handlerForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
    setError(Validation({ ...form, [name]: value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Enviando Informacion");
    axios
      .post(`http://localhost:3001/activity`, form)
      .then((res) => alert("Actividad Creada"))
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("Bad Request: Invalid form data");
        } else {
          alert("Error: " + error.message);
        }
      });
    setForm({
      name: "",
      difficulty: "",
      season: "",
      duration: "",
      countries: [],
    });
  };
  const handlerSelect = (e) => {
    const value = e.target.value;
    const selectCountries = form.countries;
    if (selectCountries.includes(value)) {
      setForm({
        ...form,
        countries: selectCountries.filter((filtra) => filtra !== value),
      });
    } else {
      setForm({ ...form, countries: [...selectCountries, value] });
    }
  };
  const buscarId = (id) => {
    const countriesActivity = country.find((e) => e.id === id);
    return countriesActivity.name;
  };
  const countrieMap = form.countries.map((e) => buscarId(e));

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <form onSubmit={handlerSubmit}>
          <hr />
          <div>
            <h1 className={style.titulo}>Agrega la Actividad Turistica</h1>
            <div className={style.formSeleccion}>
              <label htmlFor="name">Actividad:</label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handlerForm}
                name="name"
                className={style.input}
                placeholder="Escribe tu Actividad..."
                required
              />
            </div>
            <span>{error.name ? error.name : " "}</span>
          </div>
          <div className={style.formSeleccion}>
            <label htmlFor="difficulty">Dificultad:</label>
            <select
              id="difficulty"
              onChange={handlerForm}
              name="difficulty"
              className={style.input}
              placeholder="Escribe tu Dificultad..."
            >
              <option value=""> Selecciona la Dificultad</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              </select>
            <span>{error.difficulty}</span>
          </div>
          <div className={style.formSeleccion}>
            <label htmlFor="duration">Duracion:</label>
            <input
              type="text"
              id="duration"
              value={form.duration}
              onChange={handlerForm}
              name="duration"
              className={style.input}
              placeholder="Escribe el tiempo..."
            />
            <span>{error.duration}</span>
          </div>
          <div className={style.formSeleccion}>
            <label htmlFor="season">Temporada:</label>
            <select
              id="season"
              name="season"
              onChange={handlerForm}
              className={style.input}
            >
              <option value=""> Selecciona la Temporada </option>
              <option value="Otoño"> Otoño </option>
              <option value="Verano">Verano</option>
              <option value="Primavera">Primavera</option>
              <option value="Invierno">Invierno</option>
            </select>
            <span>{error.season}</span>
          </div>
          <div className={style.formSeleccion}>
            <label htmlFor="countries">Pais:</label>
            <input
              type="text"
              id="countries"
              value={countrieMap}
              onChange={handlerForm}
              name="countries"
              className={style.input}
              placeholder="Selccion el Pais..."
              required
            />
            <select
              name="countries"
              id="countries"
              multiple={true}
              value={form.countries}
              onChange={handlerSelect}
            >
              {country.map((e) => (
                <option className={style.input} key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
            <span>{error.countries}</span>
          </div>
          <button className={style.btn} type="submit" >Crear Actividad</button>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default Form;
