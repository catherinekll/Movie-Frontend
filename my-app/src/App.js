import './App.css';
import movieimages from "./data/movies-with-images.json";
import MovieCard from './MovieCard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="App">
      <div className="container">
        {movieimages.slice(0,15).map(movie => 
        <MovieCard movie={movie} style={{backgroundColor:252462}}/>
      )}
      </div>
    </div>
  );
}

export default App;
 