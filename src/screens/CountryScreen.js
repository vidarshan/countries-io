import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../actions/countryActions';

const CountryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const countryInfo = useSelector((state) => state.getCountry);

  const { country, loading } = countryInfo;

  useEffect(() => {
    dispatch(getCountry(match.params.name));
    console.log('country : ');
    console.log(country);
  }, [match]);

  return <div>Country Screen</div>;
};

export default CountryScreen;
