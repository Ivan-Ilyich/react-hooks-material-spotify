import React from 'react';
import SidebarOption from './SidebarOption/SidebarOption';

const Sidebar = () => (
  <div className="sidebar__container">
    <img
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt="side bar logo"
      className="sidebar__logo"
    />
    <SidebarOption option="Home" />
    <SidebarOption option="Search" />
    <SidebarOption option="Your Library" />
    <br />
    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr />
  </div>
);

export default Sidebar;
