import React from 'react';

const ViewInfo = ({ descreption, imageUrl, name }) => (
  <div className="view__info__container">
    <img src={imageUrl} alt="a asd" />
    <div className="view__info__infoText">
      <strong>PLAYLIST</strong>
      <h2>{name}</h2>
      <p>{descreption}</p>
    </div>
  </div>
);

export default ViewInfo;
