/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import './articles.css';

export default function Articles() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/articles/ar/ar/1/25/json', {
      signal: abortController.signal,
    }).then((response) => response.json())
      .then(({ data }) => {
        setLoading(false);
        setArticles(data);
      })
      .catch((err) => <h1>{err}</h1>);
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    setFilterArray(articles.filter((book) => book.title.includes(searchValue)));
  }, [searchValue]);

  return (
    <div className="content">
      <div className="header">
        <div className="item">
          <img src="../assests/article.png" alt="article" />
          <h3 className="title">مقالات</h3>
        </div>
        <input className="search-input" placeholder="بحث عن مقالة" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className="article-container">
        { !loading ? !filterArray.length ? articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        )) : filterArray.map((article) => (
          <ArticleCard key={article.id} article={article} />
        )) : <h2>Loading...</h2>}
      </div>
    </div>
  );
}
