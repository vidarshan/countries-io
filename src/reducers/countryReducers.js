import {
  GET_ALL_COUNTRIES_REQUEST,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
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
