import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Avatar from './Avatar/AvatarComp';
import { useDataLayer } from '../../../../../context/store';

const Header = () => {
  const [{ user }] = useDataLayer();
  return (
    <div className="header__container">
      <SearchBar />
      <Avatar imageUrl={user?.images[0].url} userName={user?.display_name} />
    </div>
  );
};

export default Header;
