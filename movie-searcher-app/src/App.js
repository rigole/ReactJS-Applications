import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./components/MovieList";
import MovieHeader from "./components/MovieHeader";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')
  return (
    <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieHeader heading="Movies"/>
        </div>
      <div className="row">
          <MovieList movies={movies}/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </div>
  );
}

export default App;
