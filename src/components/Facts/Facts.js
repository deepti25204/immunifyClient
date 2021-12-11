import './Facts.css';
import {FACTS} from '../../shared/facts';

const IMG = (imgName) => {
  return require(`../../images/${imgName}`);
}

const Fact = ({index, item}) => {

  const imageSrc = (IMG(item.image) || {}).default;
  return (
    <div className={"fact " + (index % 2 === 0 ? '' : 'fact--grey')}>
      <div className={"container fact__container " + (index % 2 === 0 ? 'fact__container--normal' : '')}>

        <div className="fact__image">
          <img src={imageSrc} alt={item.alt} width="100%" height="auto" />
        </div>
        
        <div className="fact__details">
          <h3> {item.title} </h3>
          <p> {item.description} </p>
          <button>Buy Subscription</button>
        </div>
      
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