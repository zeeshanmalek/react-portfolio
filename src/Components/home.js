import React from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const home = () => {
  return (
    <>
    <div className='body'>
      
     
      
      <div className='home' id='home'>
      <div className='content'>
        <h3>I'M<br/> <span style={{color : '#fec86a'}}>Jisanahmad Malek  <FontAwesomeIcon icon={faCode} /></span>
        <br/>
        <Typewriter className='typewriter'
  options={{
    strings: ['ReactJS Developer', 'Front-End-Developer'],
    autoStart: true,
    loop: true,
    
  }}
/>
<br/>

        <div className='social-icons'>
          <a href='https://github.com/zeeshanmalek'><FontAwesomeIcon icon={faGithub} /></a>
          <a href='www.linkedin.com/in/jisanahmad-malek'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://www.instagram.com/zeeshan.malekk?igsh=MTd4eDlmOGQ2bzlncg=='><FontAwesomeIcon icon={faInstagram} /></a>
        
          <a href='https://wa.link/s4z0rl'><FontAwesomeIcon icon={faWhatsapp} /></a>

        </div>
       
        </h3>
       
       
      </div>
      
    
      </div>
      
  
        
     
      
      
      
      </div></>

  )
}

export default home
