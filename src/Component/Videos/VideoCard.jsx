/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';

export default function BookCard({ video }) {
  const videosArray = video.attachments;
  return (
    <div key={video.id} className="video-card">
      <h2>{video.title}</h2>
      <p className="description">{video.description}</p>
      <div className="videos">
        {videosArray.map((vido) => (
          <video key={video.id} controls="true">
            <source src={vido.url} type="audio/mpeg" />
          </video>
        ))}
      </div>
    </div>
  );
}
