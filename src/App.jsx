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
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Navbar />}>
          <Route path="/books" element={<Book />} />
          <Route path="/audios" element={<Audios />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
