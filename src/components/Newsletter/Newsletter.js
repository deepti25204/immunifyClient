import './Newsletter.css';

const Newsletter = () => {

  const subscribe = () => {
    // validation
    // call api
    console.log("subscribe");
  }

  return (
    <section className="newsletter">
      <div className="newsletter__container container">
        <p>
          Keep the Moms and Children in your family
          healthy. Subscribe to our weekly newsletter now! 
        </p>
        <div className="newsletter__inputgroup">
          <div className="newsletter__inputs">
            <input type="email" pattern=".+@globex\.com" size="30" required 
              className="newsletter__email" 
              placeholder="Email here" 
              aria-label="Email here" aria-describedby="button-addon2" id="emailInputBottom" />
            <div className="newsletter__btn">
              <button type="button" id="subscribeBtn" onClick={subscribe}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;