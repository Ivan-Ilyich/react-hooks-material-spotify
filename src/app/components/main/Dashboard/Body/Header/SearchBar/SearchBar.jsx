/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayer } from '../../../../../../context/store';
import * as types from '../../../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const SearchBar = () => {
  const [{ selectedPlaylistsTracks }, dispatch] = useDataLayer();
  console.log(
    '🚀 ~ file: SearchBar.jsx ~ line 11 ~ SearchBar ~ selectedTracks',
    selectedPlaylistsTracks,
  );
  const [search, setSearch] = useState();

  useEffect(() => {
    // spotifyApi.searchTracks(search).then((tracks) => {
    //   console.log(
    //     '🚀 ~ file: SearchBar.jsx ~ line 20 ~ spotifyApi.searchTracks ~ tracks',
    //     tracks,
    //   );
    //   dispatch({
    //     type: types.SET_SELECTED_PLAYLISTS_TRACKS,
    //     payload: tracks.tracks.items,
    //   });
    // });
  }, [search]);

  return (
    <div className="header__searchBar__container">
      <SearchIcon />
      <input
        placeholder="Search for Artists, Songs, or Podcasts "
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
