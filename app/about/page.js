import React from 'react'
import Header from '../src/component/header/Header'
import Footer from '../src/component/footer/Footer'
import AboutCard from '../src/component/aboutCard/aboutcard'

export default function page() {
  return (
    <div>
      <Header/>

      <AboutCard dg="bddddg" />
      <Footer/>
    </div>
  )
}
