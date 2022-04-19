/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';

export default function AudioCard({ audio }) {
  const audiosArrays = audio.attachments;
  return (
    <div className="audio-card">
      <h2>{audio.title}</h2>
      {audiosArrays.map((audios) => (
        <div key={audios.id} className="audio">
          <h4>{audios.description}</h4>
          <audio controls="true">
            <source src={audios.url} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}
