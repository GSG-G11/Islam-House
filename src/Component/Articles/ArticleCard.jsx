/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

export default function BookCard({ article }) {
  return (
    <div key={article.id} className="book-card">
      <h2>{article.title}</h2>
      <a href={article.attachments.length ? article.attachments[0].url : null} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFilePdf} />
      </a>
    </div>
  );
}
