/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import AudioCard from './AudioCard';

export default function Audios() {
  const [loading, setLoading] = useState(true);
  const [audios, setAudios] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/audios/ar/ar/1/25/json', {
      signal: abortController.signal,
    }).then((response) => response.json())
      .then(({ data }) => {
        setLoading(false);
        setAudios(data);
      })
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    setFilterArray(audios.filter((audio) => audio.title.includes(searchValue)));
  }, [searchValue]);

  return (
    <>
      <div>Audios</div>
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      { !loading ? !filterArray.length ? audios.map((audio) => (
        <AudioCard audio={audio} />
      )) : filterArray.map((audio) => (
        <AudioCard audio={audio} />
      )) : <h2>Loading...</h2>}
    </>
  );
}
