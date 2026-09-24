// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
const footer = () => {
  return (
    <>
        <div className='Appfooter'>
            <div className='footerInfo'>
                <a href="/">Samuel Daba</a>
                <p>Lecturer and Software Engineer @ Faculty of Computing and Informatics, JiT, Jimma University, Ethiopia</p>
            </div>
            <div className='footerLinks'>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Project</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Experience</a></li>
                </ul>
            </div>
            <div className='footerContact'>
                <p>Let's connect — reach out on any of these</p>
                <div className='socialMedia'>
                    <a href="https://www.linkedin.com/in/samuel-daba-sefissa-0b1b4a1b6/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/samuel-daba-sefissa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://twitter.com/samuel_daba" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
            <p>&copy; 2026 Sam D. All rights reserved.</p>
        </div>
    </>
  )
}

export default footer
