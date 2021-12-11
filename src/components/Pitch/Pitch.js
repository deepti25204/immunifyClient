import './Pitch.css';
import pitch from '../../images/pitch.svg';

const Pitch = () => {
  return (
    <div className="pitch pitch--purplelight">
      <div className="container pitch__container">
        <div className="pitch__image">
          <img src={pitch} alt="Data Security Circle" width="100%" height="auto" />
        </div>

        <div className="pitch__details">
          <h3>Your Private Data Remains Private</h3>
          <p> Your health files always remain encrypted with us and we never use it in any external promotions. Be reassured that we are both GDPR and HIPAA compliant platform, if that satisfies your curious soul. </p>
        </div>
      </div>
    </div>
  )
}

export default Pitch;