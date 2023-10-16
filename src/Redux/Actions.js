import axios from "axios";
import {
  CREATE_ACTIVITIES,
  GET_ACTIVITY,
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  FILTER_BY_CONTINENTS,
  ORDER_BY_NAME,
  GET_FROM,
  CLEAN_BDD,
  SET_CURRENT_PAGE,
  ORDER_BY_POPULATION,
  FILTER_BY_ACTIVITIES,
  INTERSECT,
} from "./types";

export const getCountries = () => {
  return async function (dispatch) {
    const countries = await axios.get(`http://localhost:3001/countries`);
    const allCountries = countries.data;
    dispatch({ type: GET_COUNTRIES, payload: allCountries });
  };
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    try {
      const countriesByName = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      const countriesName = countriesByName.data;
      dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countriesName });
    } catch (error) {
      alert("Ha ocurrido un error al buscar el país por nombre. Inténtalo nuevamente.");
    }
  };
};

export const getCountriesId = (id) => {
  return async function (dispatch) {
    const countries = await axios.get(`http://localhost:3001/countries/${id}`);
    const countriesId = countries.data;
    dispatch({ type: GET_COUNTRIES_BY_ID, payload: countriesId });
  };
};

export function createActivities() {
  return async function (dispatch) {
    const activities = await axios.post(`http://localhost:3001/activity`);
    const create = activities.data;
    dispatch({ type: CREATE_ACTIVITIES, payload: create });
  };
}
export const getActivities = () => {
  return async function (dispatch) {
    const activities = await axios.get(`http://localhost:3001/activity`);
    const allActivities = activities.data;
    dispatch({ type: GET_ACTIVITY, payload: allActivities });
  };
};

export function orderByName(name) {
  return {
    type: ORDER_BY_NAME,
    payload: name,
  };
}

export function filterByContinents(continents) {
  return {
    type: FILTER_BY_CONTINENTS,
    payload: continents,
  };
}
export const intersect = () => async (dispatch) => {
  try {
    return dispatch({
      type: INTERSECT,
    });
  } catch (error) {
    return error;
  }
};
export function filterByActivities(activities) {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload: activities,
  };
}

export function ordenByPopulation(population) {
  return {
    type: ORDER_BY_POPULATION,
    payload: population,
  };
}

export function getFrom(source) {
  return {
    type: GET_FROM,
    payload: source,
  };
}

export function cleanBDD() {
  return {
    type: CLEAN_BDD,
  };
}

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
}
