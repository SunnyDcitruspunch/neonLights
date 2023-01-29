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
    const smallestHeaderDisplayWidth = 500
    const header = document.querySelector('.header-titleWrapper') as HTMLElement
    const title = header.querySelector('h1')

    if (header && distanceY > distanceWhenShrinkHeader) {
      if (window.innerWidth < smallestHeaderDisplayWidth) {
        header.style.display = 'none'
      } else {
        if(title) {
          title.innerHTML = 'SY'
        }
      }

      header.setAttribute('id', 'header-smallerTitle')
    } else {
      header.style.display = 'block'
      header.removeAttribute('id')

      if (title) {
        title.innerHTML = 'SUNNY YANG'
      }
    }
  }
}
