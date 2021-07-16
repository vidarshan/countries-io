import axios from 'axios';
import {
  GET_ALL_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_REQUEST,
  GET_ALL_COUNTRIES_SUCCESS,
} from '../constants/countryConstants';

export const getAllCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_COUNTRIES_REQUEST,
    });

    const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

    console.log(data);

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
