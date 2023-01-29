import React, { Component, ReactElement } from 'react'
import './title.css'

type Props = {
  title: string
}

class Title extends Component<Props> {
  render(): ReactElement {
    const { title } = this.props

    return (
      <div className='title'>
        <i className='title-heartIcon fa fa-heart-o heart-off title-heartIcon' aria-hidden='true' />
        <h1>{title?.toUpperCase()}</h1>
      </div>
    )
  }
}

export default Title
