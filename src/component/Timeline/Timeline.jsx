import React from 'react'
import Title from '../Title/Title'
import './Timeline.css'

const Skills = () => {
  return (
    <div>
      <Title title='experience' />
      <div className='company'>- Healthlink Cooperative - Director of Information Systems</div>
      <div className='scrolling'>
        <h3>Excel - VBA &nbsp; SQL &nbsp; ASP.NET &nbsp; Vue.js</h3>
      </div>
      <div className='company'>- Marriott School - Teaching Assistant</div>
      <div className='scrolling'>
        <h3>C# &nbsp; ASP.NET</h3>
      </div>
      <div className='company'>- BYU - Web Developer</div>
      <div className='scrolling'>
        <h3>React &nbsp; TypeScript &nbsp; Node.js &nbsp; AWS</h3>
      </div>
      <div className='company'>- Uganda Village Project - Mobile App Developer</div>
      <div className='scrolling'>
        <h3>React Native &nbsp; Redux &nbsp; Google Firebase</h3>
      </div>
      <div className='company'>- Old Assyrian Research Envrionment - Web Developer</div>
      <div className='scrolling'>
        <h3>Vue.js &nbsp; Python (Flask) &nbsp; API</h3>
      </div>
    </div>
  )
}

export default Skills
