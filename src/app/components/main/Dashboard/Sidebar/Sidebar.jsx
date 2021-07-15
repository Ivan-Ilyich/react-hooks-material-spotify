import React from 'react';
import SidebarOption from './SidebarOption/SidebarOption';

const Sidebar = () => (
  <div className="sidebar__container">
    <SidebarOption option="Home" />
    <SidebarOption option="Search" />
    <SidebarOption option="Your Library" />
  </div>
);

export default Sidebar;
