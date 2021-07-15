import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import Player from './Player/Player';

const Dashboard = () => (
  <div className="dashboard__container">
    <div className="sidebar__body__container">
      <Sidebar />
      <Body />
    </div>
    <Player />
  </div>
);

export default Dashboard;
