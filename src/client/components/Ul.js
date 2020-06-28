import React from 'react';
import { Link } from 'react-router-dom'

export default function Ul({ list }) {
    return (
        <ul className="list-group">
            {list.map(place => {
            return (
                <li key={place.id} className='list-group-item '>
                    <Link 
                    to={ { pathname: '/places/id', 
                    state: { id: place.id }}}
                    className='list-group-item-action'>
                    {place.name}
                    </Link>
                </li>
                    )
            })}
        </ul>
      );
}

