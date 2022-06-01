import React from 'react'
import About from './components/about'
import Experience from './components/experience'
import Header from './components/header'
import Nav from './components/nav'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Footer from "./components/footer"
import Testinomials from "./components/testimonials"

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <About/>
        <Experience />
        <Services />
        <Portfolio />
        <Testinomials />
        <Contact />
        <Footer />
    </>
  )
}

export { App }