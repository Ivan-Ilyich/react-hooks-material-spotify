import React from 'react';

const PlayerDetails = () => {
  return (
    <div className="player__details__container">
      <img
        className="player__albumLogo"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2F0998c9cfe10ea8318ec3a1cbec6e63e4a4ecc802&f=1&nofb=1"
        alt="album logo"
      />
      <div className="player__songInfo">
        <h4>some song</h4>
        <p>...</p>
      </div>
    </div>
  );
};

export default PlayerDetails;
