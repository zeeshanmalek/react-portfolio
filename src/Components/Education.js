import React from 'react'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

const Education = () => {
  return (
    <>

    <h1 className='headings' id='educaion'>Education </h1>
    <div className='Education-part'>
      <div className='container'>
       <div className='title'>
        ReactJS Intern</div>
        <div className='place'>
           Tech-Elecon Pvt.Ltd
        </div>
          <div className='time'>
            January-2023 -  April-2023
          </div>
          <div className='city'>
     <FontAwesomeIcon icon={faMapPin} style={{color: "white",}} /> &nbsp;      ANAND  
          </div>
          {/* <div className='line'></div> */}

          {/* Second container */}
          
          <div className='third-component'>
          {/* <div className='line'></div> */}
          <div className='title'>
        BCA</div>
        <div className='place'>
           Sardar Patel University
        </div>
          <div className='time'>
            January-2018 -  April-2021
          </div>
          <div className='city'>
     <FontAwesomeIcon icon={faMapPin} style={{color: "white",}} /> &nbsp;   Boriavi , Anand
          </div>
          
          </div>
        </div>
       
       
      
      <div className='container-line'></div>
      <div className='container1'>
     
      <div className='title'>
        MCA</div>
        <div className='place'>
          Sardar Patel University
        </div>
          <div className='time'>
            January-2021 -  April-2023
          </div>
          <div className='city'>
     <FontAwesomeIcon icon={faMapPin} style={{color: "white",}} /> &nbsp;      Vallabh Vidhyanagar , Anand 
          </div>
        
          
      </div>
         
      
     
      
    </div>
  </>
  )
}

export default Education
