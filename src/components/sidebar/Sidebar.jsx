import React from 'react';
import './sidebar.css'
import Logo from '../../assets/logo.svg'

function Sidebar() {

  const currentYear = new Date().getFullYear();
  const startYear = 2023;

  return (
   <aside className='aside'>
    <a href="#home" className="nav__logo"> 
      <img src={Logo} alt="Gavrosh Cyril Potfolio" />
    </a>

    <nav className="nav">
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link"><i class="fa-solid fa-house"></i></a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link"><i class="fa-solid fa-user"></i></a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link"><i class="fa-solid fa-briefcase"></i></a>
          </li>
          <li className="nav__item">
            <a href="#resume" className="nav__link"><i class="fa-solid fa-graduation-cap"></i></a>
          </li>
          <li className="nav__item">
            <a href="#portfolio" className="nav__link"><i class="fa-solid fa-layer-group"></i></a>
          </li>
      {/*     <li className="nav__item">
            <a href="#blog" className="nav__link"><i class="fa-solid fa-notes"></i></a>
          </li> */}
          <li className="nav__item">
            <a href="#contact" className="nav__link"><i class="fa-solid fa-address-book"></i></a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="nav__footer">
      <span className="copyright">
        &copy; {startYear}-{currentYear}.
      </span>
    </div>
   </aside>
  )
}

export default Sidebar