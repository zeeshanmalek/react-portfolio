import React from 'react'
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faLocationDot ,faCode } from '@fortawesome/free-solid-svg-icons'
import img from '../assets/self01.png';

const About = () => {
  return (
    <div className='about'>
     
      <div className='content-part'>
        <h1>Jisanahmad  <FontAwesomeIcon icon={faCode} style={{color : '#fec86a'}} /></h1>
        <p></p>
        <p><FontAwesomeIcon icon={faPhone}  style={{color : '#fec86a'}}/>&nbsp;+91 74057 04392</p>
        <p><FontAwesomeIcon icon={faLocationDot} style={{color : '#fec86a'}}/>&nbsp; Nadiad , Gujarat</p>
      </div>
      <div className='image-part'>
        <div className='shape'>
          
        </div>
        <img src={img} alt='self'></img>
      </div>
    </div>
  )
}

export default About
