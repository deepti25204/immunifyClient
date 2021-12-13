import './Facts.css';
import {FACTS} from '../../shared/facts';
import AOS from 'aos';
import { useEffect } from 'react';

const IMG = (imgName) => {
  return require(`../../images/${imgName}`);
}

const FactImage = ({item}) => {

  const imageSrc = (IMG(item.image) || {}).default;
  return(
    <div className="fact__image" data-aos="fade-up">
      <img src={imageSrc} alt={item.alt} width="100%" height="auto" />
    </div>
  )
}

const FactDetails = ({item}) => {

  return (
    <div className="fact__details" data-aos="fade-up">
      <h3> {item.title} </h3>
      <p> {item.description} </p>
      <button>Buy Subscription</button>
    </div>
  )
}

const Fact = ({index, item}) => {
  
  return (
    <div className={"fact " + (index % 2 === 0 ? '' : 'fact--grey')}>
      <div className={"container fact__container " + (index % 2 === 0 ? 'fact__container--normal' : '')}>
        <FactImage item={item} />
        <FactDetails item={item}/>
      </div>
    </div>
  )
}

const FactsList = () => {
  const factsList = FACTS || [];
  return (
    <>
    {
      factsList.map((fact, index) => (
        <Fact key={fact.id} index={index} item={fact} />
      ))
    }
    </>
  )
}

const Facts = () => {
  return (
    <div className="facts">
      <header>GET STARTED TODAY</header>
      <h2>
        Smarter Digitization, 
        <br />
        Leads to Better Immunization
      </h2>
      <FactsList />
    </div>
  )
}

export default Facts;