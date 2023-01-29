import React, { Component, ReactElement } from 'react'
import Header from './component/Header/Header'
import AboutMe from './component/AboutMe/AboutMe'
import Timeline from './component/Timeline/Timeline'
import Resume from './component/Resume/Resume'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

class App extends Component {
 render(): ReactElement {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
      <Timeline />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
 }
}

export default App
