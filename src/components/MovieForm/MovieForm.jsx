import {useState} from 'react';
import {useDispatch} from 'react-redux';
import './MovieForm.css'

function MovieForm() {

    const dispatch = useDispatch();

    // must make movie an object containing title, poster, and description, and genre_id

    const [newMovie, setNewMovie] = useState({title: '', poster: '', description: '', genre_id: ''});

    function handleChange(event) {
        setNewMovie({...newMovie, genre_id: event.target.value});
    }

    function handleTitleChange(event) {
        setNewMovie({...newMovie, title: event.target.value})
    }

    function handleImageChange(event) {
        setNewMovie({...newMovie, poster: event.target.value})
    }

    function handleDescriptionChange(event) {
        setNewMovie({...newMovie, description: event.target.value})
    }

    //Submitting all the information
    const handleClick = () => {
        event.preventDefault();
        console.log('clicked submit', newMovie);

        dispatch({
            type: 'CREATE_NEW_MOVIE',
            payload: newMovie
        })
    }

    console.log('Chosen genre:', newMovie);
    return(
        <>
            <div className='center-div'>
                <h3>Add a movie</h3>

                {/* inputs */}
                <input placeholder='Movie Title' type="text" onChange={handleTitleChange} className="block-layout"></input>
                <input placeholder='Image URL' type="text" onChange={handleImageChange} className="block-layout"></input>

                {/* text area for description */}
                <textarea placeholder='Movie description' type="text" onChange={handleDescriptionChange} className="block-layout"></textarea>

                {/* Dropdown stuff */}
                <div className='block-layout'>
                    <label htmlFor="chosenGenre">Genres:</label>
                    <select
                    onChange={handleChange}
                    name="chosenGenre"
                    id="chosenGenre"
                    className="block-layout"
                    >
                        <option>Choose genre...</option>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                    </select>
                </div>

                {/* submit button */}
                <button onClick={handleClick} className='block-layout'>Submit</button>
            </div>
        </>
    )
}

export default MovieForm;