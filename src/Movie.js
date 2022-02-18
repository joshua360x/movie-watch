import React from 'react';
import { insertItemIntoWatchList } from './services/fetch-utils';

export default function Movie({ title, vote_average, id, poster_path, onWatchList }) {
  const watchListAlready = onWatchList(id);

  async function handleClick() {
    // if item is on watch=List disable Click
    if (!watchListAlready) {
      const dataObject = {
        title: title,
        api_id: id,
        image_path: poster_path,
      };
      await insertItemIntoWatchList(dataObject);
    }
  }

  return (
    <div onClick={handleClick} className={watchListAlready ? 'movie watched ' : 'movie point '}>
      <p>{title}</p>
      <p>{vote_average} / 10</p>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : 'https://www.placecat.com/200/300'
        }
      />
    </div>
  );
}
