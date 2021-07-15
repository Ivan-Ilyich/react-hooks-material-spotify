import React from 'react';

const SidebarOption = ({ option, Icon }) => (
  <div className="sidebar__option__container">
    {Icon && <Icon className="sidebar__option__icon" />}
    {Icon ? <h4>{option}</h4> : <p>{option}</p>}
  </div>
);

export default SidebarOption;
