/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter,
  Routes,
  Route,
}
  from 'react-router-dom';
import Book from './Component/Book/Book';
import Home from './Component/HomePage/Home';
import Audios from './Component/Audios/Audios';
import Videos from './Component/Videos/Videos';
import Articles from './Component/Articles/Articles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/audios" element={<Audios />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
