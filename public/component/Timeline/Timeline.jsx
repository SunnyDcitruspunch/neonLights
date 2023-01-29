import React from 'react'
import RollingText from '../../common/RollingText/RollingText'
import Title from '../../common/Title/Title'
import { resume } from '../resume'

const Skills = () => {
  return (
    <div>
      <Title title='experience' />
      {resume.map((item) => {
        return <RollingText key={item.id} company={item.company} skills={item.skills} />
      })}
    </div>
  )
}

export default Skills
