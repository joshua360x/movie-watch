import React, { useEffect, useState } from 'react';
import { fetchWatchList, updateIfUserWatched } from './services/fetch-utils';

export default function WatchList() {
  const [watchMovies, setWatchMovies] = useState([]);

  async function handleClick(id) {
    await updateIfUserWatched(id);
  }

  useEffect(() => {
    async function onLoad() {
      const data = await fetchWatchList();
      console.log('🚀 ~ file: WatchList.js ~ line 10 ~ onLoad ~ data', data);
      setWatchMovies(data);
    }
    onLoad();
  }, []);

  return (
    <div>
      {watchMovies.map((movie, i) => (
        <div onClick={() => handleClick(movie.api_id)} key={movie + i} className="watchListOfMovie">
          <p>{movie.title}</p>
          { movie.image_path ? <img
            src={
              movie.image_path
                ? `https://image.tmdb.org/t/p/original${movie.image_path}`
                : ''
            }
          /> : <img src='https://www.placecat.com/200/300' alt="" /> }
        </div>
      ))}
    </div>
  );
}
