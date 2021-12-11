import './Banner.css';
import banner from '../../images/banner.jpg';
import bannerlogo from '../../images/bannerlogo.png';
import googlePlay from '../../images/googleplay.svg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container banner__container">
        <div className="banner__image">
          <img src={banner} alt="A lady holding her infant kid- a loving gesture" width="100%" height="auto"/>
        </div>
        
        <div className="banner__description">
          <h1 className="banner__heading">
            Give your child the gift of 
            "<span className="banner__heading--highlight">Good Health</span>"with
            <img className="banner__imagelogo" src={bannerlogo} alt="Immunifyme Logo" width="70%" height="auto" />
          </h1>

          <div className="banner__linkbuttons">
            <div className="banner__subscription">
              <button>Subscribe Now</button>
            </div>
            <div className="banner__androidbtn">
              <a href="https://play.google.com/store/apps/details?id=com.immparentportal&hl=en&gl=US" >
                <img src={googlePlay} alt="Google Play Icon" width="135px" height="40px" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Banner;