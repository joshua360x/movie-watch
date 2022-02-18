import React from 'react';
import Movie from './Movie';

export default function MoviesList({ movies, onWatchList, reLoad }) {
  return (
    <>
      {movies.map((movie, i) => (
        <Movie reLoad={reLoad} onWatchList={onWatchList} key={movie + i} {...movie} />
      ))}
    </>
  );
}
