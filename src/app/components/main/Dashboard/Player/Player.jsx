import React from 'react';
import PlayerControls from './PlayerControls/PlayerControls';
import VolumeControls from './VolumeControls/VolumeControls';
import PlayerDetails from './PlayerDetails/PlayerDetails';

const Player = () => (
  <div className="player__container">
    <PlayerDetails />
    <PlayerControls />
    <VolumeControls />
  </div>
);

export default Player;
