import React from 'react';
import ViewInfo from './ViewInfo/ViewInfo';
import ViewSongs from './ViewSongs/ViewSongs';

const MainView = () => (
  <div className="main__view__container">
    <ViewInfo />
    <ViewSongs />
  </div>
);

export default MainView;
