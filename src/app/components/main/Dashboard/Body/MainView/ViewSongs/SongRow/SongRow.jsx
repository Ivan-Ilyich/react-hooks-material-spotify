/* eslint-disable no-undef */
import React from 'react';

const SongRow = ({ name, album, artist, imageUrl, id, handleClick }) => (
  <div
    className="song__row__container"
    id={id}
    role="button"
    tabIndex={0}
    onClick={handleClick}
    onKeyPress={handleClick}
  >
    <img className="song__row__album" src={imageUrl} alt="album logo" id={id} />
    <div className="song__row__info" id={id}>
      <h1 id={id}>{name}</h1>
      <p id={id}>
        {album} - {artist}
      </p>
    </div>
  </div>
);
export default SongRow;
