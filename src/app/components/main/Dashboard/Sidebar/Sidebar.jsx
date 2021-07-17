import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption/SidebarOption';
import { useDataLayer } from '../../../../context/store';
import * as types from '../../../../context/consts/types';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayer();
  console.log(
    '🚀 ~ file: Sidebar.jsx ~ line 10 ~ Sidebar ~ playlists',
    playlists,
  );

  const handleClick = (e) => {
    const albumName = e.target.innerHTML;
    const newSelectedPlaylist = playlists.items.filter((playlist) =>
      playlist.name.includes(albumName),
    );
    console.log(
      '🚀 ~ file: Sidebar.jsx ~ line 22 ~ handleClick ~ newSelectedPlaylist',
      newSelectedPlaylist,
    );
    dispatch({
      type: types.SET_SELECTED_PLAYLIST,
      payload: newSelectedPlaylist[0],
    });
  };

  return (
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
      <strong className="sidebar__title">Playlists</strong>
      <hr />
      {playlists?.items?.map((item) => {
        return (
          <SidebarOption
            option={item.name}
            key={item.name}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
