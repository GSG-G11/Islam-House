/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

export default function BookCard({ book }) {
  return (
    <div key={book.id} className="book-card">
      <h2>{book.title}</h2>
      <p className="bookDescription">{book.description}</p>
      <a className="pdf-icon" href={book.attachments[0].url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFilePdf} />
      </a>
    </div>
  );
}
