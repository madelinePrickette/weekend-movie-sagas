import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

function Details() {

    const dispatch = useDispatch();
    

    const movie = useSelector(store => store.thisMovie)
    // another useselect to get the genres

    return(
        <>
            <h4>Details Page</h4>
            <h3>{movie.title}</h3>
            <img src={movie.poster}></img>
            <p>{movie.description}</p>
            {/* need to get the categories here */}
        </>
    )
}

export default Details;