import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <>
        <header id="header">
        <nav className="navbar navbar-expand-lg">
            <div className="container main-menu">
                <div id='logo'>
                <Link className="navbar-brand" to={'/'}><img src="assets/images/favicon.ico" alt="logo" title="portfolio website" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav nav-menu">
                    <li><Link to={'/'}>Home</Link></li>
                    <li>
                    <Link to={'/about'}>About</Link></li>
                    <li>
                    <Link to={'/service'}>Services</Link>
                    </li>
                    <li>
                    <Link to={'/portfolio'}>Portfolio</Link>
                    </li>
                    <li>
                    <Link to={'/pricing'}>Pricing</Link>
                    </li>
                    <li>
                    <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
      
        </>
     );
}

export default Header;