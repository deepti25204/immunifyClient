import './Footer.css';
import { SEARCH_KEYWORDS } from '../../shared/searchkeywords';

const Keyword = ({item, last}) => {
  return (
    <>
      <a href={item.link}>{item.title}</a>
      {last ? '' : ' | '}
    </>
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
      </div>
    </footer>
  )
}

export default Footer;