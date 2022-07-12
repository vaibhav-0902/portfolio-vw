import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const ActiveLink = ({isActive}) => {
        return {
            color : isActive ? "#2978b5" : ""
        }
    }
  return (
    <header className="header">
        <h3>
            <NavLink to="/">
                VW
            </NavLink>
        </h3>

        <nav className="menu-items">
            <ul className="nav-list">
                <NavLink className="nav-list-item" to="/project" style={ActiveLink}>
                    Projects
                </NavLink>
                <NavLink className="nav-list-item" to="/skills" style={ActiveLink}>
                    Skills
                </NavLink>
            </ul>
        </nav>
    </header>
  );
};

export default Header;