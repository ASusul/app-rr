import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const list = [
    { name: "start", path: "/", excact: true },
    { name: "produkty", path: "/products" },
    { name: "kontakt", path: "/contact" },
    { name: "pandel admina", path: "/admin" },

]

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.excact ? item.excact : false}> {item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;