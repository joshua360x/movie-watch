import React, { useState } from 'react';

export default function Search() {

  const [movieQuery, setMovieQuery] = useState('');

  return <form>
    <label>
      Search For A Movie
      <input value={movieQuery} onChange={e => setMovieQuery(e.target.value)} type="text"/>
    </label>
  </form>;
}
