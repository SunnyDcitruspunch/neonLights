import * as React from 'react'
import './Header.css'

export default class Header extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.resizeHeaderOnScroll)
  }

  render() {
    return (
      <div>
        <div id='container'>
          <header id='header'>
            <div className='header-titleWrapper'>
              <h1 id='logo'>SUNNY YANG</h1>
            </div>
          </header>
        </div>
      </div>
    )
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    const distanceWhenShrinkHeader = 30
    const header = document.querySelector('.header-titleWrapper')

    if (header && distanceY > distanceWhenShrinkHeader) {
      header.setAttribute('id', 'header-smaller')
    } else {
      header.removeAttribute('id', 'header-smaller')
    }
  }
}
