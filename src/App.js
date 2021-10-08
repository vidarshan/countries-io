import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from 'antd/lib/layout/layout';

import TopNav from './components/TopNav';
import BottomFooter from './components/BottomFooter';

import HomeScreen from './screens/HomeScreen';
import AllScreen from './screens/AllScreen';
import CountryScreen from './screens/CountryScreen';
import AboutScreen from './screens/AboutScreen';
import ResultsListScreen from './screens/ResultsListScreen';

function App() {
  return (
    <Router>
      <Layout>
        <TopNav></TopNav>
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/all' component={AllScreen}></Route>
        <Route path='/search/:type/:name' component={ResultsListScreen}></Route>
        <Route path='/country/:name' component={CountryScreen}></Route>
        <Route path='/about' component={AboutScreen}></Route>
      </Layout>
      <BottomFooter></BottomFooter>
    </Router>
  );
}

export default App;
