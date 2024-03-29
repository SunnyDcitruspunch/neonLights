import React from 'react'
import Title from '../../common/Title/Title'
import './Resume.css'

const Resume = () => {
  return (
    <div>
      <Title title='contact' />
      <div className='resume'>
        <a href={`mailto:${'hahasunny97@gmail.com'}`} rel='noopener noreferrer' target='_blank'>
          <i className='fa fa-envelope-o letter-2' aria-hidden='true' />
        </a>
        &nbsp;
        <span className='letter letter-1'>ha</span>
        <span className='letter letter-2'>h</span>
        <span className='letter letter-1'>asunn</span>
        <span className='letter letter-2'>y</span>
        <span className='letter letter-1'>97@g</span>
        <span className='letter letter-2'>ma</span>
        <span className='letter letter-1'>il.c</span>
        <span className='letter letter-2'>o</span>
        <span className='letter letter-1'>m</span>
        <br />
        <br />
        <br />
        <span>
          <span className='letter letter-1'>R</span>
          <span className='letter letter-2'>E</span>
          <span className='letter letter-3'>S</span>
          <span className='letter letter-4'>U</span>
          <span className='letter letter-2'>M</span>
          <span className='letter letter-4'>E</span>
          <span className='letter letter-1'> (Eng)</span>
        </span>
        <br />
        <br />
        <br />
        &nbsp;
        <a
          target='_blank'
          href='https://drive.google.com/file/d/1lGzqJEUTDQZMpb4uleaSNOjOffY2sSyq/view?usp=share_link'
          rel='noopener noreferrer'
        >
          <i className='fa fa-cloud-download letter-2' aria-hidden='true' />
        </a>
        <br />
        <br />
        <br />
        <span>
          <span className='letter letter-1'>R</span>
          <span className='letter letter-2'>E</span>
          <span className='letter letter-3'>S</span>
          <span className='letter letter-4'>U</span>
          <span className='letter letter-2'>M</span>
          <span className='letter letter-4'>E</span>
          <span className='letter letter-1'> (Chi)</span>
        </span>
        <br />
        <br />
        <br />
        &nbsp;
        <a
          target='_blank'
          href='https://drive.google.com/file/d/1aNoXJUl1uHo9HmCxtpyasDKYhB57GuT1/view?usp=share_link'
          rel='noopener noreferrer'
        >
          <i className='fa fa-cloud-download letter-2' aria-hidden='true' />
        </a>
      </div>
    </div>
  )
}

export default Resume
