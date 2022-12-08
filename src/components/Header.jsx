import React from 'react'
import '../assets/css/style.css';
import brandLogo from '../assets/icons/brand-logo.svg'
import searchLogo from '../assets/icons/search-icon.svg'
import nasaLogo from '../assets/icons/nasa-logo.svg'

const Header = () => {
  return (
    <>
        <header className="flex justify-btwn align-cntr">
            <div className="brand-logo flex justify-start align-cntr">
                <img src={brandLogo} alt="brand-logo" />
                <span>Nasa<span id="tech">Technology Transfer</span>Program</span>
            </div>
            <nav className="navbar flex justify-arnd align-cntr">
                <a href="#">Patent Portfolio</a>
                <a href="#">Add To Wishlist</a>
                <a href="#">Log In</a>
                <a href="#">
                    <img id="search-icon" src={searchLogo} alt="search-icon"/>
                </a>
                <a href="#">
                    <img id="nasa-logo" src={nasaLogo} alt="nasa-logo"/>
                </a>
            </nav>
        </header>
    </>
  )
}

export default Header
