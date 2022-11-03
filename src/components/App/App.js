import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';
// import './App.css';

function App(props) {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <Favorites />
      </div>
    </>
  );
}

export default App;
