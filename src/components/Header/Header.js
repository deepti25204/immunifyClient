import './Header.css';
import ImmunifyMelogo from '../../images/ImmunifyMelogo.svg';
import breadcrumb from '../../images/breadcrumb.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <a className="header__brand" href="https://immunifyme.com/">
          <img src={ImmunifyMelogo} alt="Immunify Logo" width="80%" height="auto" />
        </a>
        <div className="header_right">
          <div className="header__signin">
            <a role="button" href="https://admin.immunifyme.com/" target="_blank" rel="noreferrer">
              Sign in
            </a>
          </div>
          <div className="header__breadcrumb">
            <button type="button">
              <span style={{backgroundImage: `url(${breadcrumb})`}}></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
    
  )
}

export default Header;