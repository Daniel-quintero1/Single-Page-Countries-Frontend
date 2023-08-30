import {
  CLEAN_BDD,
  CREATE_ACTIVITIES,
  GET_ACTIVITY,
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  FILTER_BY_CONTINENTS,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  SET_CURRENT_PAGE,
  FILTER_BY_ACTIVITIES,
} from "./types";

const initialState = {
  countries: [],
  countriesBdd: [],
  countriesDetail: {},
  activities: [],
  currentPage: 1,
  detailActivities: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };
    case GET_COUNTRIES_BY_NAME:
      return { ...state, countries: payload };
    case GET_COUNTRIES_BY_ID:
      return { ...state, countriesDetail: payload };
    case GET_ACTIVITY:
      return { ...state, activities: payload };
    case CREATE_ACTIVITIES:
      return { ...state, detailActivities: payload };
    case ORDER_BY_NAME:
      const copyCountriesName =
        state.countriesBdd.length > 0
          ? [...state.countriesBdd]
          : [...state.countries];
      let orderName =
        payload === "asc"
          ? copyCountriesName.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : copyCountriesName.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        countriesBdd: orderName,
      };
    case FILTER_BY_CONTINENTS:
      const AllCountries = [...state.countries];
      const filterContinent =
        payload === "Todos los continentes"
          ? AllCountries
          : AllCountries.filter((e) => e.continents === payload);
      return {
        ...state,
        countriesBdd: filterContinent,
      };
    case FILTER_BY_ACTIVITIES:
      const allCountry = state.countries;

      const paisActivities = allCountry.filter((country) => {
        return country.activities.length > 0;
      });
      let newArr = [];

      for (let i = 0; i < paisActivities.length; i++) {
        for (let j = 0; j < paisActivities[i].activities.length; j++) {
          if (paisActivities[i].activities[j].name === payload) {
            newArr.push(paisActivities[i]);
          }
        }
      }
      const filtro = payload === "Todos" ? allCountry : newArr;

      return {
        ...state,
        countries: filtro,
      };
    case ORDER_BY_POPULATION:
      const copyPopulation =
        state.countriesBdd.length > 0
          ? [...state.countriesBdd]
          : [...state.countries];
      let orderPopulation =
        payload === "POA"
          ? copyPopulation.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : copyPopulation.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        countriesBdd: orderPopulation,
      };

    case CLEAN_BDD:
      return { ...state, countriesBdd: [] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
