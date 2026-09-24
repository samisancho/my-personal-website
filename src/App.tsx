 
import './App.css'
import Header from './componenets/header'
import Footer from './componenets/footer'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Sidebar from './componenets/sidebar'
import AboutMe from './componenets/aboutme'
import ContactMe from './componenets/contactme'
import Skills from './componenets/skills'
import Services from './componenets/services'
import Experience from './componenets/experience'
function App() {
  
  return (
    <>
    <div className="AppContainer">
      <div className='headerContainer'>
        <Header />
      </div>
      <div className='contentContainer'>
         <section id='aboutme'>
          <AboutMe />
         </section>
         <section id='skills'>
          <Skills /> 
         </section>
         <section id='services'>
          <Services />
         </section>
         <section id='experience'>
          <Experience/>
         </section>
          <section id='contactme'>
             <ContactMe />
          </section>
         
      </div>  
      <div className='footerContainer'>
         <Footer />
      </div>
    </div>
    </>
  )
}

export default App
