import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => (
  <div className="header__searchBar__container">
    <SearchIcon />
    <input placeholder="Search for Artists, Songs, or Podcasts " type="text" />
  </div>
);

export default SearchBar;
