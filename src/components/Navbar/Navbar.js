import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/About'>About</a>
            </li>
            <li>
                <a href='/Awards'>Awards</a>
            </li>
            <li>
                <a href='/Music'>Music</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar