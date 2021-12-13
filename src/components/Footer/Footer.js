import './Footer.css';
import { SEARCH_KEYWORDS } from '../../shared/searchkeywords';
import { SITEMAP } from '../../shared/sitemap';
import ImmunifyMelogo from '../../images/ImmunifyMelogo.svg';

const Keyword = ({item, last}) => {
  return (
    <>
      <a href={item.link}>{item.title}</a>
      {last ? '' : ' | '}
    </>
  )
}

const FooterAbout = () => {
  return (
    <div className="footer__about">
      <div className="footer__logo">
        <a href="https://immunifyme.com/">
          <img src={ImmunifyMelogo} alt="Immunify Logo" />
        </a>
      </div>
      <p>
        Our vision is to become a global market leader in the field of
        early childhood healthcare, by providing innovative technology
        solutions and services to the children and their caregivers.
      </p>
    </div>
  )
}

const ListItem = ({item}) => {
  return (
    <li>
      <a href={item.link}>
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
        </svg>
        {item.title}
      </a>
    </li>
  )
}

const FooterLink = () => {
  return (
    <div className="footer__link">
      <div className="footer__title">
        <h3>Sitemap</h3>
        <hr />
      </div>
      {SITEMAP.map((list, index) => <ul key={'list'+ index} >{list.map(item => <ListItem key={item.id} item={item} />)}</ul>)}
    </div>
  )
}

const FooterAddress = () => {
  return (
    <div className="footer__address">
      <div className="footer__title">
        <h3>Contact Us</h3>
        <hr />
      </div>
      <ul>
        <li>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
          </svg>
          <div className="footer__contactemail">
            <a href="mailto:info@immunify.me">hello@immunify.me</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

const FooterSocial = () => {
  return (
    <div className="footer__social">
      <div className="footer__title">
        <h3>Follow Us</h3>
        <hr />
      </div>
      <ul>
        <li className="footer__social--fb">
          <a href="https://www.facebook.com/ImmunifyMe" target="_blank" rel="noreferrer" alt="facebook">
            <svg alt="facebook" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </a>
        </li>
        <li className="footer__social--twitter">
          <a href="https://twitter.com/immunifyme" target="_blank" rel="noreferrer" alt="twitter">
            <svg alt="twitter" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
              <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
          </a>
        </li>
        <li className="footer__social--linkedin">
          <a href="https://www.linkedin.com/company/immunifyme/" target="_blank" rel="noreferrer" alt="linkedin">
            <svg alt="linkedin" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
        </li>
        <li className="footer__social--insta">
          <a href="https://www.instagram.com/immunifyme/" target="_blank" rel="noreferrer" alt="instagram">
            <svg alt="instagram" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
              <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__keywords">
          <h4>Popular Searches</h4>
          <p>
            {SEARCH_KEYWORDS.map((item, index) => (
              <Keyword key={item.id} item={item} last={index===(SEARCH_KEYWORDS.length -1 )} />)
            )}
          </p>
        </div>
        <div className="footer__details">
          <FooterAbout />
          <FooterLink />
          <div>
            <FooterAddress />
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;