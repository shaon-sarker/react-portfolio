import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <>
        <header id="header">
            <div class="container main-menu">
                <div class="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                    <Link to="/"><img src="assets/images/logo.png" alt="logo" title="portfolio website" /></Link>
                    </div>
                    <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
     );
}

export default Header;