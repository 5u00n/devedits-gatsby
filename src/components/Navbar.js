import React from 'react';
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <h1>Devedits Gatsby</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>

            </div>
        </nav>
    );
}

export default Navbar;
