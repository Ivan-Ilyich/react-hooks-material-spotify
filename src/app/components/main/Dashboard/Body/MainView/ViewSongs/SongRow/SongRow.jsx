import React from 'react';

const SongRow = () => (
  <div className="song__row__container">
    <img
      className="song__row__album"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2F0998c9cfe10ea8318ec3a1cbec6e63e4a4ecc802&f=1&nofb=1"
      alt="asdasd"
    />
    <div className="song__row__info">
      <h1>track name</h1>
      <p>info about the song artist etc..</p>
    </div>
  </div>
);
export default SongRow;
