import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <>
        {/* <header id="header">
            <div class="container main-menu">
                <div class="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                    <Link to="/"><img src="assets/images/favicon.ico" alt="logo" title="portfolio website" /></Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul class="nav-menu">
                            <li><a to="/">Home</a></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header> */}
        <header id="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container main-menu">
                <div id='logo'>
                <Link class="navbar-brand" to={'/'}><img src="assets/images/favicon.ico" alt="logo" title="portfolio website" /></Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav nav-menu">
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