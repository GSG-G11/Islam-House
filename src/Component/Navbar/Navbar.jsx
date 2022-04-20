import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>الصفحة الرئيسية</NavLink>
          <NavLink to="/books" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>الكتب</NavLink>
          <NavLink to="/audios" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>صوتيات</NavLink>
          <NavLink to="/videos" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>فيديوهات</NavLink>
          <NavLink to="/articles" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>مقالات</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
