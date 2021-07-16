import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../actions/countryActions';

const CountryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const country = useSelector((state) => state.getCountry);

  useEffect(() => {
    dispatch(getCountry(match.params.name));
    console.log(country);
  }, []);

  return <div>Country Screen</div>;
};

export default CountryScreen;
