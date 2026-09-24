// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import prfl from '../assets/photo_2026-09-04_16-24-52.jpg';
import { faDownload,faCircleArrowRight, faPlus} from '@fortawesome/free-solid-svg-icons';
const aboutme = () => {
  return (
    < >
      <div className='aboutme'>
        <div className='aboutmeImg'>
            {/* <img src="./" alt="" /> */}
            <img src={prfl} alt="Samuel Daba" />
        </div>
        <div className='aboutmeInfo'> 
            <h4>Hi, I’m </h4>
            <h4>Samuel Daba</h4>
            <p>I am a lecturer and researcher passionate about knowledge and innovation.  
As a monitor and advisor, I guide learners and projects toward success.  
I also work as a web developer, creating functional and impactful solutions.  
  
            </p>
        </div>
      </div> 
      <div className='aboutmeBottom'>
             {/* Hire me Button */}
             <div className="button">
                <button className='btn btn-primary m-3 btn-btn-outline-info'>Hire Me <FontAwesomeIcon icon={faCircleArrowRight} /></button>
                <button className='btn btn-secondary m-3 btn-outline-light'>Download CV <FontAwesomeIcon icon={faDownload} /></button>
             </div>
             {/* 8+ years of experience in software development and teaching. */}
             <div className="skills">
                <div>
                <p>8 <FontAwesomeIcon icon={faPlus} /> 
                </p>
                <p>Year Experience</p>
             </div>
             <div>
                <p>5 <FontAwesomeIcon icon={faPlus} /> 
                </p>
                <p>Project</p>
             </div>
              <div>
                <p>10 <FontAwesomeIcon icon={faPlus} />
                </p>
                <p>Final Year Project Advisor</p>
             </div>
             </div>
      </div> 
      <div className='aboutmeParagraphContainer'>
         <h3 id='aboutme'>About Me</h3>
        <div className='aboutmeParagraph'>
           
        <p>
            Hello, I’m Samuel — a lecturer, researcher, monitor, advisor, and web developer with a strong focus on AI and deep learning.
        </p>
        <p>
            🌐 Web Development
            I design and build applications that combine frontend clarity with robust backend systems, working with Node.js, Python, PostgreSQL, and Django. My journey began with HTML, CSS, JavaScript, and PHP, and has grown into full‑stack development that balances usability with technical precision.
        </p>
        <p>
            
            🤖 AI & Deep Learning
            Alongside web development, I explore machine learning, scikit‑learn, and transformer models to tackle challenges in explainable AI and OCR for underrepresented languages. My research focuses on making technology more accessible while advancing practical AI solutions.

            </p>
        <p>
            Driven by curiosity and problem‑solving, I aim to keep learning, keep building, and keep sharing knowledge through impactful digital projects.
        </p>
        </div>
        </div>  
    </>
  )
}

export default aboutme
