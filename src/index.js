import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('FETCH_THIS_MOVIES_GENRES', fetchMovieGenres)
    yield takeEvery('CREATE_NEW_MOVIE', createNewMovie)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie'); // movies is response from server
        console.log('get all:', movies.data); 
        // should show all movies and their data because * is being selected in movie.router.js
        yield put({ type: 'SET_MOVIES', payload: movies.data });
        // dispatch to reducer to trigger it so it can store the data we recieved back
    } catch {
        console.log('get all error');
    }    
} // end of fetchAllMovies generator

// genre generator goes here-------- Dunno why this is needed so I'm gonna hide it
function* fetchAllGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        console.log('this is all genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data})
    } catch {
        console.log('error in the fetchAllGenres generator function')
    }
}

function* fetchMovieGenres(action) {
    console.log('the action.payload:', action.payload);
    console.log('the action.payload.id:', action.payload.id);

    try{
        // this axios request fires off the get in movie.genre.router to get
        // the genres of the movie at the id we sent over in action.payload.movieId
        // which comes from the dispatch in the component that holds the movie id
        // in the action.
        // the response should be stored in the this movie reducer which
        // holds all info about a specific movie
        let genres = yield axios.get(`/api/movieGenre/${action.payload.id}`);
        yield put({type: 'THIS_MOVIES_GENRES', payload: genres.data})
    }catch {
        console.log('get the genres of the movie error GENERATOR FUNCTION')
    }
}

//create generator function for creating a new movie
function* createNewMovie(action) {
    console.log('the new create movie action.payload is:', action.payload)
    try{
        yield axios.post(`/api/movie`, action.payload)
        yield put({type: 'FETCH_MOVIES'})
    } catch(err) {
        console.log('Error in createNewMovie generator function', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => { // movies.data will go into this array
    switch (action.type) {  
        case 'SET_MOVIES':
            return action.payload; // this is movies.data
        default:
            return state;
    }
}

// this reducer doesnt need a generator function because it doesnt need an axios request
// its just temporary storage.
const thisMovie = (state = {}, action) => {
    switch (action.type) {
        case 'THIS_MOVIE':
            return action.payload
        default:
            return state;
    }
}

// this reducer holds the genres of the selected movie in an array
const thisMoviesGenres = (state = [], action) => {
    switch (action.type) {
        case 'THIS_MOVIES_GENRES':
            return action.payload
        default: 
            return state;
    }
}

// Used to store the movie genres 
// UPON STARTING THERE IS NO GENRE GENERATOR FUNCTION
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        thisMovie,
        thisMoviesGenres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
