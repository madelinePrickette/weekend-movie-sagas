import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import './Details.css'

function Details() {

    const dispatch = useDispatch();


    const movie = useSelector(store => store.thisMovie)
    // another useselect to get the genres
    const genres = useSelector(store => store.thisMoviesGenres)

    return(
        <>
            <h4>Details Page</h4>
            <h3>{movie.title}</h3>
            <img src={movie.poster} className="imageResize"></img>
            <p>{movie.description}</p>
            {/* need to get the categories here */}
            <ul>
                {genres.map(genre => {
                    return (
                        <li>{genre.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Details;