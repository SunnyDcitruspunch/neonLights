import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='iconcontainer'>
      <a target='blank' href='https://github.com/SunnyDcitruspunch'>
        <span className='sign-four'>
          <i className='fa fa-github' aria-hidden='true' />
        </span>
      </a>
      <a target='blank' href='https://www.linkedin.com/in/sunny-yang-05ab11106/'>
        <span className='linkedin'>
          <i className='fa fa-linkedin-square' aria-hidden='true' />
        </span>
      </a>
    </div>
  )
}

export default Contact
