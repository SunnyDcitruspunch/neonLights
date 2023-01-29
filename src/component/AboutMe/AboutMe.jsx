import React from 'react'
import Title from '../../common/Title/Title'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <div className='aboutMe'>
        <Title title='about me' />
        <div className='smallersign'>
          <div>
           <p> - BRIGHAM YOUNG UNIVERSITY</p>
           <p>- Taiwan, Taipei</p>
           <p>- English / Mandarin</p>
           <p> - Information Systems</p>
           <p>- GPA: 3.5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
