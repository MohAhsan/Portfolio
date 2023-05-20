import React from 'react'
import './navbar.css'


export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li>Work</li>
                <li>About</li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </div>
    )
}
