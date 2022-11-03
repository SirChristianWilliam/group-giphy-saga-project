import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
// import registerServiceWorker from './registerServiceWorker';

const search = (state = [], action) => {
    console.log('in search reducer', state);
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default: 
        return state;
    }
    return state;
}

const favorites = (state = [], action) => {
    console.log('in favorites reducer', state)
    return state;
}

// function* fetchSearch() {
//     console.log('in fetchSearch');
// }

function* fetchFavorites() {
    console.log('in fetchFavorites');
}

// function* addFavorites() {
//     console.log('in addFavorites');
// }

// function* deleteFavorites() {
//     console.log('in deleteFavorites');
// }

// function* changeCategory() {
//     console.log('in changeCategory');
// }


function* watcherSaga() {

    // yield takeEvery('FETCH_SEARCH');

    // yield takeEvery('FETCH_FAVORITES');

    // yield takeEvery('ADD_FAVORITE');

    // yield takeEvery('DELETE_FAVORITE');

    // yield takeEvery('CHANGE_CATEGORY');
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        search,
        favorites,
    }),
    applyMiddleware(sagaMiddleware,logger),
);

sagaMiddleware.run(watcherSaga);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
document.getElementById('root'));
