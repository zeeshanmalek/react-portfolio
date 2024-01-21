import React from 'react'
import './skill.css'
import htmlimg from '../assets/html.svg'
import cssimg from '../assets/css.svg'
import bootstrapimg from '../assets/bootstrap.svg'
import javascriptimg from '../assets/js.svg'
import mysqltimg from '../assets/mysql.svg'
import reacttimg from '../assets/react.svg'
import githubimg from '../assets/github.svg'
import gitimg from '../assets/git.svg'
import pythonimg from '../assets/python.svg'

const skill = () => {
  return (
    <div className='skill-part'>
      <h1>Skills</h1>
      <div className='skill-container'>
        <div className='skill-card'>
          <img src={htmlimg} alt='HTML'/>
          <h2>HTML</h2>
        </div>
        <div className='skill-card'>
          <img src={cssimg} alt='CSS'/>
          <h2>CSS</h2>
        </div>
        <div className='skill-card'>
          <img src={bootstrapimg} alt='Bootstrap'/>
          <h2>Bootstrap</h2>
        </div>
        <div className='skill-card'>
          <img src={javascriptimg} alt='Javascript'/>
          <h2>JavaScript</h2>
        </div>
        <div className='skill-card'>
          <img src={mysqltimg} alt='MySQL'/>
          <h2>MySQL</h2>
        </div>
        <div className='skill-card'>
          <img src={reacttimg} alt='ReactJS'/>
          <h2>ReactJS</h2>  
        </div>
        <div className='skill-card'>
          <img src={gitimg} alt='Git'/>
          <h2>GIT</h2>
        </div>
        <div className='skill-card'>
          <img src={githubimg} alt='Github'/>
          <h2>Github</h2>
        </div>
        <div className='skill-card'>
          <img src={pythonimg} alt='Python'/>
          <h2>Python</h2>
        </div>
      </div>





    </div>
  )
}

export default skill
