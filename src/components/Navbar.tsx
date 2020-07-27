import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper deep-purple lighten-3 px1">
            <NavLink to="/" className="brand-logo">React + Typescript</NavLink>
            <ul className="right hide-on-med-and-down">

                <li><NavLink to="/">Todos</NavLink></li>
                <li><NavLink to="/about">Info</NavLink></li>
            </ul>
        </div>
    </nav>
)
