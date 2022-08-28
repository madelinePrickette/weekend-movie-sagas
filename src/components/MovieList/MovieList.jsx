import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres)

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        // dispatch({ type: 'FETCH_GENRES' }); dunno why this is needed yet...
    }, []);

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie}/>
                    );
                })}
            </section>
            {/* {JSON.stringify(genres)} */}
        </main>

    );
}

export default MovieList;