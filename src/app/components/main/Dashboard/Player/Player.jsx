import React from 'react';
import PlayerControls from './PlayerControls/PlayerControls';
import VolumeControls from './VolumeControls/VolumeControls';
import PlayerDetails from './PlayerDetails/PlayerDetails';

const Player = () => (
  <div className="player__container">
    <PlayerDetails className="player__details__container" />
    <PlayerControls className="player__controls__container" />
    <VolumeControls className="player__volume__container" />
  </div>
);

export default Player;
