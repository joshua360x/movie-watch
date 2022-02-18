import React from 'react';

export default function Movie({ title, vote_average, id, poster_path }) {
  function handleClick() {
    const dataObject = {
      title: title,
      api_id: id,
    };
    console.log('🚀 ~ file: Movie.js ~ line 10 ~ handleClick ~ dataObject', dataObject);
  }

  return (
    <div onClick={handleClick} className="movie">
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
