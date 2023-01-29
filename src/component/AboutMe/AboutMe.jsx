import React from 'react'
import Title from '../../common/Title/Title'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <div className='aboutMe'>
        <Title title='about me' />
        <div>
          <p>
            - Currently working as L2 Full Stack Software Engineer at{' '}
            <a target='_blank' href='https://www.databased.com/'>
              DataBased
            </a>
          </p>
          <p>- Working as software engineer since 2019</p>
          <p>- Graduated from BRIGHAM YOUNG UNIVERSITY 2020</p>
          <p>- Majored in Information Systems</p>
          <p>- Fluent in English and Mandarin</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
