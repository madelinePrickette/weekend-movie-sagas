import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import MovieForm from '../MovieForm/MovieForm.jsx';

function App() {
  return (
    <Router> 
      <div className="App">
        <header className='App-header'>
          <h1>The Movies Saga!</h1>
          <nav>
            <ul className='no-bullets'>
              <li>
                <Link to='/'>Movie List</Link>
              </li>
              <li>
                <Link to='/add-movie'>Add a Movie</Link>
              </li>
            </ul>
          </nav>
        </header>  
        {/* Movie List page */} 
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id">
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path='/add-movie'>
          <MovieForm />
        </Route>
      </div>
    </Router>
  );
}


export default App;
