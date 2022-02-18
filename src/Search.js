import React, { useState } from 'react';
import MoviesList from './MoviesList';

export default function Search() {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/.netlify/functions/movie?search=${movieQuery}`);

    const json = await response.json();
    console.log('🚀 ~ file: Search.js ~ line 13 ~ handleSubmit ~ json', json.data.results);
    const movieResults = json.data.results;
    setMovies(movieResults);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Search For A Movie
          <input value={movieQuery} onChange={(e) => setMovieQuery(e.target.value)} type="text" />
        </label>
        <button>Find Movie</button>
      </form>

      <div>
        <MoviesList movies={movies} />
      </div>
    </section>
  );
}
