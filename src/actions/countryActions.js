import axios from 'axios';
import {
  GET_ALL_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_REQUEST,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_COUNTRY_FAIL,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
} from '../constants/countryConstants';

export const getAllCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_COUNTRIES_REQUEST,
    });

    const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

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

export const getCountry = (countryName) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COUNTRY_REQUEST,
    });

    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${countryName}`
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
