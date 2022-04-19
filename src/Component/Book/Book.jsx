import React, { useState, useEffect } from 'react';

export default function Book() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/get-category-items/5366/books/ar/ar/1/25/json', {
      signal: controller.signal,
    }).then((response) => response.json())
      .then(({ data }) => setBooks(data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  return (
    <>
      <div>Book</div>
      { books.map((book) => (
        <div key={book.id}>
          <h2><a href={book.attachments[0].url}>{book.title}</a></h2>
          <p>{book.description}</p>
          <h3>{book.prepared_by[0].title}</h3>
        </div>
      )) }
    </>
  );
}
