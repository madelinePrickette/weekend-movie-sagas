import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './MovieItem.css'

function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleMovieClick = () => {
        history.push(`/details/${movie.id}`)

        dispatch({
            type: 'THIS_MOVIE',
            payload: movie
        })

        dispatch({
            type: 'FETCH_THIS_MOVIES_GENRES',
            payload: {id: movie.id}
        })
    }

    return(
        <>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={handleMovieClick} className="imageResize"/>
        </>
    )
}
// onclick in here sends dispatch- send whole movie through to redux, 
// push to details component, details component uses 
// useSelector to grab that movie from redux
export default MovieItem;