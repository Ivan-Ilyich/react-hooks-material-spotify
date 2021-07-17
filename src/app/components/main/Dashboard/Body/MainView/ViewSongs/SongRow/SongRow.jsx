import React from 'react';

const SongRow = ({ name, album, artist, imageUrl }) => (
  <div className="song__row__container">
    <img className="song__row__album" src={imageUrl} alt="asdasd" />
    <div className="song__row__info">
      <h1>{name}</h1>
      <p>
        {album} - {artist}
      </p>
    </div>
  </div>
);
export default SongRow;
