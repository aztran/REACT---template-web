import React, { Component } from 'react';
import logo from '../../../assets/img/logo-garuda.png';
import world from '../../../assets/img/world.png';
import './Header.scss';

import { Icon } from 'antd';


class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="header">
            <img src={logo} className="header__logo" alt="logo" />
            <ul className="header-nav">
              <li className="header-nav__item active">Reservation</li>
              <li className="header-nav__item">Transaction Review</li>
              <li className="header-nav__item">Management Booker</li>
              <li className="header-nav__item">Profile GOS</li>
              <li className="header-nav__item">Referensi</li>
              <li className="header-nav__item">|</li>
              <li className="header-nav__item--agent"> <Icon type="user" className="icon-user" /> , Welcome Agent</li>
              <li className="header-nav__item"><img src={world} className="icon-world"  alt="icon-world"/>id <Icon type="down" className="icon-user" /></li>
            </ul>
          </div>
        </div>
        <div className="header--blue">
          <div className="container">
            <div className="header__bottom">
              <div className="header__icon">
                <Icon type="home" className="" /> 
              </div>
              <div className="header__icon">
                <span>Reservation</span>
              </div>
              <div>
                <span>Search Flight</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Header;