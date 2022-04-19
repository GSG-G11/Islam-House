/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
}
  from 'react-router-dom';
import Book from './Component/Book/Book';
import Home from './Component/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
