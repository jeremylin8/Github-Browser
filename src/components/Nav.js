import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navbar'>
        <Link to='/' className='brand-link'>
          <h1 className='brand-text'>Github Browser</h1>{' '}
        </Link>
      </nav>
    )
}

export default Nav
