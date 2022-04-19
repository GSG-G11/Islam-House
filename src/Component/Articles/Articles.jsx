/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

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
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    setFilterArray(articles.filter((book) => book.title.includes(searchValue)));
  }, [searchValue]);

  return (
    <>
      <div>Articles</div>
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      { !loading ? !filterArray.length ? articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      )) : filterArray.map((article) => (
        <ArticleCard key={article.id} article={article} />
      )) : <h2>Loading...</h2>}
    </>
  );
}
