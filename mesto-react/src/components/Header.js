
import '../index.css';
import logo from '../images/logo.svg';

function Header () {
  return(
    <div className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта."/>
    </div>
  )
}

export default Header;
