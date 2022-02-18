import React from 'react';
import Movie from './Movie';

export default function MoviesList({ movies, onWatchList }) {
  return (
    <>
      {movies.map((movie, i) => (
        <Movie onWatchList={onWatchList} key={movie + i} {...movie} />
      ))}
    </>
  );
}
