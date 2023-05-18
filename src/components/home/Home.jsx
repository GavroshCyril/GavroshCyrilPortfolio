import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'

function Home() {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="Gavrosh Cyril Avatar" className="home__img" />
      </div>
    </section>
  )
}

export default Home