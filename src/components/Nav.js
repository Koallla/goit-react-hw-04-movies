import React from 'react';
import { NavLink } from 'react-router-dom';

const ativeStyle = {
  backgroundColor: 'green',
};

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={ativeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={ativeStyle}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
