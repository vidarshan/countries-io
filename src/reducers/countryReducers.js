import {
  GET_ALL_COUNTRIES_REQUEST,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
  SEARCH_COUNTRY_REQUEST,
  SEARCH_COUNTRY_SUCCESS,
  SEARCH_COUNTRY_FAIL,
} from './../constants/countryConstants';

export const getAllReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_REQUEST:
      return { loading: true };
    case GET_ALL_COUNTRIES_SUCCESS:
      return { loading: false, countries: action.payload };
    case GET_ALL_COUNTRIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchCountryReducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case SEARCH_COUNTRY_REQUEST:
      return { loading: true };
    case SEARCH_COUNTRY_SUCCESS:
      return { loading: false, results: action.payload };
    case SEARCH_COUNTRY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getCountryReducer = (state = { country: {} }, action) => {
  switch (action.type) {
    case GET_COUNTRY_REQUEST:
      return { loading: true };
    case GET_COUNTRY_SUCCESS:
      return { loading: false, country: action.payload };
    case GET_COUNTRY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
