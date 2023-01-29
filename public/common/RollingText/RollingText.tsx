import React, { Component, Fragment, ReactElement } from 'react'
import './rollingText.css'

type Props = {
  company: string
  skills: string[]
}

class RollingText extends Component<Props> {
  render(): ReactElement {
    const { company, skills } = this.props

    return (
      <div className='rollingText'>
        <p className='rollingText-company'>- {company}</p>
        <div className='rollingText-scrolling'>
          <p className='rollingText-skills'>
            {skills.map((skill, index) => {
              return <Fragment key={index}>{skill} &nbsp;</Fragment>
            })}
          </p>
        </div>
      </div>
    )
  }
}

export default RollingText
