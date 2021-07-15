import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import AllScreen from './screens/AllScreen';
import CountryScreen from './screens/CountryScreen';
import AboutScreen from './screens/AboutScreen';
import TopNav from './components/TopNav';
import BottomFooter from './components/BottomFooter';

function App() {
  return (
    <Router>
      <TopNav></TopNav>
      <main>
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/all' component={AllScreen}></Route>
        <Route path='/country/:name' component={CountryScreen}></Route>
        <Route path='/about' component={AboutScreen}></Route>
      </main>
      <BottomFooter></BottomFooter>
    </Router>
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'>
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
