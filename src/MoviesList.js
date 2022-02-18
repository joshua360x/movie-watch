import React from 'react';

export default function MoviesList({ movies }) {
  return (
    <>
      {movies.map((movie, i) => (
        <div  className="movie" key={movie + i}>
          <p>{movie.title}</p>
          <p>{movie.vote_average} / 10</p>
        </div>
      ))}
    </>
  );
}
