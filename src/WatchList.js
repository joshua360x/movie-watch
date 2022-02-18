import React, { useEffect, useState } from 'react';
import { fetchWatchList } from './services/fetch-utils';

export default function WatchList() {
  const [watchMovies, setWatchMovies] = useState([]);

  useEffect(() => {
    async function onLoad() {
      const data = await fetchWatchList();
      console.log('🚀 ~ file: WatchList.js ~ line 10 ~ onLoad ~ data', data);
    }
    onLoad();
  }, []);

  return <div>WatchList</div>;
}
