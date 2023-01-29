import React from 'react'
import Title from '../Title/Title'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <div className='aboutMe'>
       <Title title='about me' />
        <div className='smallersign'>
          <div>
            - BRIGHAM YOUNG UNIVERSITY
            <br />
            - Taiwan, Taipei
            <br />
            - English / Mandarin
            <br />
            - Information Systems
            <br />- GPA: 3.5
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
