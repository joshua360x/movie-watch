import React, { useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import { fetchWatchList } from './services/fetch-utils';

export default function Search() {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watchMovies, setWatchMovies] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/.netlify/functions/movie?search=${movieQuery}`);

    const json = await response.json();
    console.log('🚀 ~ file: Search.js ~ line 13 ~ handleSubmit ~ json', json.data.results);
    const movieResults = json.data.results;
    setMovies(movieResults);
  }

  useEffect(() => {
    async function onLoad() {
      reLoad();
    }
    onLoad();
  }, []);

  async function reLoad() {
    const data = await fetchWatchList();
    setWatchMovies(data);
  }

  function onWatchList(idFromDB) {
    const match = watchMovies.find((movie) => Number(movie.api_id) === Number(idFromDB));

    return Boolean(match);
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
        <MoviesList reLoad={reLoad} onWatchList={onWatchList} movies={movies} />
      </div>
    </section>
  );
}
