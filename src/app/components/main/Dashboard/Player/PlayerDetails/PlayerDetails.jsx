import React from 'react';

const PlayerDetails = ({ trackTitle, albumTitle, artistTitle, imageUrl }) => {
  return (
    <div className="player__details__container">
      <img
        className="player__details__albumLogo"
        src={imageUrl}
        alt="album logo"
      />
      <div className="player__details__songInfo">
        <h4>{trackTitle}</h4>
        <p>
          {artistTitle} - {albumTitle}
        </p>
      </div>
    </div>
  );
};

export default PlayerDetails;
