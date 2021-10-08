import axios from 'axios';
import {
  GET_ALL_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_REQUEST,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_COUNTRY_FAIL,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  SEARCH_COUNTRY_FAIL,
  SEARCH_COUNTRY_REQUEST,
  SEARCH_COUNTRY_SUCCESS,
} from '../constants/countryConstants';

export const getAllCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_COUNTRIES_REQUEST,
    });

    const { data } = await axios.get('https://restcountries.com/v3/all');

    console.log(data)

    dispatch({
      type: GET_ALL_COUNTRIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COUNTRIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchCountries = (criteria, keyword) => async (dispatch) => {
  let data;

  try {
    dispatch({
      type: SEARCH_COUNTRY_REQUEST,
    });

    switch (criteria) {
      case 'name':
        data = await axios.get(
          `https://restcountries.eu/rest/v2/name/${keyword}`
        );
        break;
      case 'currency':
        data = await axios.get(
          `https://restcountries.eu/rest/v2/currency/${keyword}`
        );
        break;
      case 'language':
        data = await axios.get(
          `https://restcountries.eu/rest/v2/lang/${keyword}`
        );
        break;
      case 'capitalcity':
        data = await axios.get(
          `https://restcountries.eu/rest/v2/capital/${keyword}`
        );
        break;
      case 'callingcode':
        data = await axios.get(
          `https://restcountries.eu/rest/v2/callingcode/${keyword}`
        );
        break;
      case 'region':
        data = await axios.get(
          `https://restcountries.eu/rest/v2/region/${keyword}`
        );
        break;
      case 'regionalbloc':
        data = await axios.get(
          `https://restcountries.eu/rest/v2/regionalbloc/${keyword}`
        );
        break;
      default:
        break;
    }

    dispatch({
      type: SEARCH_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_COUNTRY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCountry = (countryName) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COUNTRY_REQUEST,
    });

    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
    );

    dispatch({
      type: GET_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COUNTRY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
