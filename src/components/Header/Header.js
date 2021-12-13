import './Header.css';
import { useState } from 'react';
import ImmunifyMelogo from '../../images/ImmunifyMelogo.svg';
import breadcrumb from '../../images/breadcrumb.svg';
import { CSSTransition } from 'react-transition-group';

const MobileNavMenu = () => {
  let width = window.innerWidth;
  return (
    <div className="menulist">
      <ul className="container">
        <li className="menulist__roleSwitch">
          <a href="https://immunifyme.com/doctor">I'm a Doctor</a>
        </li>
        <li>
          <a href="https://immunifyme.com/parent/aboutUs">About Us</a>
        </li>
        <li>
          <a href="https://immunifyme.com/parent/projects&amp;impacts">Projects &amp; Impacts</a>
        </li>
        <li>
          <a href="https://immunifyme.com/blog/" target="blank">Blog</a>
        </li>
        <li>
          <a href="https://immunifyme.com/parent/contactUs">Contact Us</a>
        </li>
        { width >= 992 &&
          (<li className="header__signin">
            <a role="button" href="https://admin.immunifyme.com/" target="_blank" rel="noreferrer">
              Sign in
            </a>
          </li>)
        }
      </ul>
    </div>
  )
}

const Header = () => {

  const [open, setOpen] = useState(false);
  let width = window.innerWidth;

  return (
    <header className="header">
      <nav className="container">
        <a className="header__brand" href="https://immunifyme.com/">
          <img src={ImmunifyMelogo} alt="Immunify Logo" width="80%" height="auto" />
        </a>

        {width < 992 ? 
        (<div className="header__right">
          <div className="header__signin">
            <a role="button" href="https://admin.immunifyme.com/" target="_blank" rel="noreferrer">
              Sign in
            </a>
          </div>

          <div className="header__breadcrumb">
            <button type="button" onClick={()=> setOpen(!open)}>
              <span style={{backgroundImage: `url(${breadcrumb})`}}></span>
            </button>
          </div>
        </div>) : 
        (
          // <ul className="header__right">

          //   <li className="header__signin">
          //     <a role="button" href="https://admin.immunifyme.com/" target="_blank" rel="noreferrer">
          //       Sign in
          //     </a>
          //   </li>
          // </ul> 
          <MobileNavMenu />
        )
        }

      </nav>
      {width < 992 && open && <MobileNavMenu />}
    </header>
    
  )
}

export default Header;