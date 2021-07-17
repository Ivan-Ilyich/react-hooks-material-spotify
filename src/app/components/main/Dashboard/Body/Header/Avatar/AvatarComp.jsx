import React from 'react';
import { Avatar } from '@material-ui/core';

const AvatarComp = ({ imageUrl, userName }) => (
  <div className="header__avatar__container">
    <Avatar alt="wait" src={imageUrl} />
    <h4>{userName}</h4>
  </div>
);

export default AvatarComp;
