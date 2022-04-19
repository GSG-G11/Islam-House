import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to="/books">Books</Link>
      <Link to="/audios">Audios</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/articles">Articles</Link>
    </>
  );
}
