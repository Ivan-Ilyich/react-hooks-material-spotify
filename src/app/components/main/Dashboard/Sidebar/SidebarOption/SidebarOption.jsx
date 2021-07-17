import React from 'react';

const SidebarOption = ({ option, Icon, handleClick }) => (
  <div
    className="sidebar__option__container"
    role="button"
    tabIndex={0}
    onKeyPress={handleClick}
    onClick={handleClick}
  >
    {Icon && <Icon className="sidebar__option__icon" />}
    {Icon ? <h5>{option}</h5> : <p>{option}</p>}
  </div>
);

export default SidebarOption;
