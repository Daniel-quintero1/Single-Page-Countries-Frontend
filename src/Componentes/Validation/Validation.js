const Validation = ({ name, difficulty, season, duration, countries }) => {
  const errors = {};

  if (name.length < 1) errors.name = "Nombre de la Actividad Incorrecto";
  if (difficulty < 0 || difficulty > 5)
    errors.difficulty =
      "El nivel de Dificultad es desde 0 hasta 5";
  if (season.length < 1) errors.season = "Nombre de la Temporada Incorrecto";
  if (duration.length < 1) errors.duration = "Tiempo de Duracion Incorrecto";
  return errors;
};
export default Validation;
