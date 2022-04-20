/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import './videos.css';

export default function Book() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/videos/ar/ar/1/25/json', {
      signal: abortController.signal,
    }).then((response) => response.json())
      .then(({ data }) => {
        setLoading(false);
        setVideos(data);
      })
      .catch((err) => <h1>{err}</h1>);
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    setFilterArray(videos.filter((book) => book.title.includes(searchValue)));
  }, [searchValue]);

  return (
    <div className="content">
      <div className="header">
        <div className="item">
          <img src="../assests/video-player.png" alt="video-player" />
          <h3 className="title">فيديوهات</h3>
        </div>
        <input className="search-input" placeholder="بحث عن فيديو" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className="card-container">
        { !loading ? !filterArray.length ? videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        )) : filterArray.map((video) => (
          <VideoCard key={video.id} video={video} />
        )) : <h2>Loading...</h2>}
      </div>
    </div>
  );
}
