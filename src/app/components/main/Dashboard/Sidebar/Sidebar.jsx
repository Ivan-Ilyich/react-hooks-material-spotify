import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption/SidebarOption';

const Sidebar = () => (
  <div className="sidebar__container">
    <img
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt="side bar logo"
      className="sidebar__logo"
    />
    <SidebarOption option="Home" Icon={HomeIcon} />
    <SidebarOption option="Search" Icon={SearchIcon} />
    <SidebarOption option="Your Library" Icon={LibraryMusicIcon} />
    <br />
    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr />
  </div>
);

export default Sidebar;
