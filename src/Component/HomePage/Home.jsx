import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div className="container">
      <ul className="home-links">
        <Link className="item" to="/">
          <img src="../assests/kaaba.png" alt="kaaba" />
          <h3 className="title">الصفحة الرئيسية</h3>
        </Link>
        <Link className="item" to="/books">
          <img src="../assests/quran.png" alt="quran" />
          <h3 className="title">الكتب</h3>
        </Link>
        <Link className="item" to="/audios">
          <img src="../assests/lantern.png" alt="lantern" />
          <h3 className="title">صوتيات</h3>
        </Link>
        <Link className="item" to="/videos">
          <img src="../assests/video-player.png" alt="video-player" />
          <h3 className="title">فيديوهات</h3>
        </Link>
        <Link className="item" to="/articles">
          <img src="../assests/article.png" alt="article" />
          <h3 className="title">مقالات</h3>
        </Link>
      </ul>
    </div>
  );
}
