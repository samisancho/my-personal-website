// import React from 'react'
// import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const header = () => {
  return (
    <>
        <div className='Appheader'>
            <div className='AuthorName' id="home">
                <a href="">Samuel Daba</a>
            </div>
            <div className='mymenubar'>
                <ul>
                <li><a href="/">Home</a></li>   
                <li><a href="#aboutme"> About</a></li>
                <li><a href="#skills">Skills</a></li>    
                <li><a href="#services">Services</a></li>    
                <li><a href="#experience">Experience</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div className='contact'>
                <a className='btn btn-primary' href="#contactme">Contact</a>
            </div>
        </div>
    </>
  )
}

export default header
