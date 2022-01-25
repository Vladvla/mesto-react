
import React from 'react';
import '../index.css';
import logo from '../images/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта."/>
      </header>
      );
  }
}

export default Header;
