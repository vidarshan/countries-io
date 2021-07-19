import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getAllReducer,
  searchCountryReducer,
  getCountryReducer,
} from './reducers/countryReducers';

const initialState = {
  countries: [],
};

const reducer = combineReducers({
  getAll: getAllReducer,
  searchCountry: searchCountryReducer,
  getCountry: getCountryReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
