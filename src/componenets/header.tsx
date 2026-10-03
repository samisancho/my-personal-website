// import React from 'react'
// import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <div className='Appheader'>
            <div className='AuthorName' id="home">
                <a href="">Samuel Daba</a>
            </div>
            <button
                className='menu-toggle'
                type='button'
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls='primary-navigation'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav
                className={`mymenubar${isMenuOpen ? ' is-open' : ''}`}
                id='primary-navigation'
                aria-label='Primary navigation'
            >
                <ul onClick={() => setIsMenuOpen(false)}>
                <li><a href="/">Home</a></li>   
                <li><a href="#aboutme"> About</a></li>
                <li><a href="#skills">Skills</a></li>    
                <li><a href="#services">Services</a></li>    
                <li><a href="#experience">Experience</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blogs</a></li>
                </ul>
            </nav>
            <div className='contact'>
                <a className='btn btn-primary' href="#contactme">Contact</a>
            </div>
        </div>
    </>
  )
}

export default Header
