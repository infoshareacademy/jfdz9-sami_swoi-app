import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/dashboard">DASHBOARD</NavLink>
            <NavLink to="/footer">FOOTER</NavLink>
        </div>
    )
};

export default Navigation;