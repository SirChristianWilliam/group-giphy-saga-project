import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import Search from '../Search/Search';

// import './App.css';

function App(props) {
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <Search />
    </div>
    </>
  );
}

export default App;
