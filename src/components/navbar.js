import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>home</Link>
                <Link to='about'>about</Link>

            </nav>
        </div>
    )
}

export default Navbar;

