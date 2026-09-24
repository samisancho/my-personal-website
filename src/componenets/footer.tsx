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
                    <a href="#home"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={30} height={30} className="uparrow" ><path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"/></svg></a>
                </div>
            </div>
            <p>&copy; 2026 Sam D. All rights reserved.</p>
        </div>
    </>
  )
}

export default footer
