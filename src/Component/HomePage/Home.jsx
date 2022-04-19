import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/audios">Audios</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/articles">Articles</Link>
      <Outlet />
    </>
  );
}
