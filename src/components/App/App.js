import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// import './App.css';

function App(props) {
  return (
    <>
     <Router>



        <Header /> 

        <nav>
            <ul>
                <li>
                {/* href to link outside our app here we use Link */}
                <Link to="/" exact>Search</Link>
                </li>
                <li>
                <Link to="/favorites" exact>Favorites</Link>
                </li>
            </ul>
        </nav>     
            
        <Route path='/'>
            <Search />
        </Route>

        <Route path='/favorites'>
            <Favorites />
        </Route>

    </Router>
    </>
  );
}

export default App;
