
import React from "react";
import { Link } from 'react-router-dom';

// Navbar to display the title and favourites
export default function Navbar({ favourites }) {
    return (
        <div className='nav-bar nav-head navbar navbar-light'>
            <h2>Coding Task</h2>
            <div className="nav-bar-item">
            <Link className="navbar-brand" to={ { pathname: '/places', state: { favourites }}}>
                {'Home'}
            </Link>
            <Link className="navbar-brand" to={ { pathname: '/favourites', state: { favourites }}}>
                {`Favourites (${favourites.length})`}
            </Link>
            </div>
        </div>
    )
}
