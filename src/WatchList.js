import React, { useEffect, useState } from 'react';
import { fetchWatchList, updateIfUserWatched } from './services/fetch-utils';

export default function WatchList() {
  const [watchMovies, setWatchMovies] = useState([]);

  async function handleClick(id) {
    await updateIfUserWatched(id);
    reLoad();
  }

  useEffect(() => {
    async function onLoad() {
      reLoad();
    }
    onLoad();
  }, []);

  async function reLoad() {
    const data = await fetchWatchList();
    console.log('🚀 ~ file: WatchList.js ~ line 10 ~ onLoad ~ data', data);
    setWatchMovies(data);
  }

  return (
    <div>
      {watchMovies.map((movie, i) => (
        <div
          className={movie.was_watched ? 'watchListOfMovie alreadyWatched' : 'watchListOfMovie'}
          onClick={() => handleClick(movie.api_id)}
          key={movie + i}
        >
          <p>{movie.title}</p>
          <p>{movie.was_watched ? '😼' : '👋'}</p>
          <img
            src={movie.image_path ? `https://image.tmdb.org/t/p/original${movie.image_path}` : '"https://www.placecat.com/200/300" '}
          />
          
        </div>
      ))}
    </div>
  );
}
