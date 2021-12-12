import './Wordpress.css';
import blog1 from '../../images/blogs/blog1.jpg';
import blog2 from '../../images/blogs/blog2.jpg';
import blog3 from '../../images/blogs/blog3.jpg';

const Wordpress = () => {
  return (
    <section className="wordpress">
      <h2 className="container wordpress__header">
          Let's Create a Healthier <br/>
          Tomorrow, Together!
      </h2>
      <div className="blogs container">
        <h2>From the Blog</h2>
        
        <div className="blogs__container">
          <div className="blogs__single">
            <article className="blog">

              <div className="blog__image">
                <img src={blog1} alt="Father with his infant" width="100%" height="auto" />
              </div>

              <div className="blog__content">

                <a className="blog__updatedtime" href="https://immunifyme.com/#">
                  <svg className="blog__calendar" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                  </svg>
                  2 days ago
                </a>

                <a className="blog__author" href="https://immunifyme.com/#">
                  <span>By&nbsp;</span>Team ImmunifyMe
                </a>

                <a className="blog__title" href="https://immunifyme.com/blog/tips-for-a-first-time-dad/" target="_blank" rel="noreferrer">
                  <h3>Tips For A First-Time Dad</h3>
                </a>

                <p>
                  Are you going to be a first-time dad soon? Firstly, congratulations on the new exciting journey of parenthood that you’re going to be a part of. The anticipation of being a parent can bring in a host of feelings and emotions for first-time parents. After all, parenthood can be one of the biggest life-altering events. […]
                </p>
              </div>

            </article>
          </div>

          <div className="blogs__double">
            <article className="blog">
              <div className="blog__image">
                <img src={blog2} alt="Infant having milk from bottle" width="100%" height="auto" />
              </div>

              <div className="blog__content">

                <a className="blog__updatedtime" href="https://immunifyme.com/#">
                  <svg className="blog__calendar" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                  </svg>
                  2 days ago
                </a>

                <a className="blog__author" href="https://immunifyme.com/#">
                  <span>By&nbsp;</span>Team ImmunifyMe
                </a>

                <a className="blog__title" href="https://immunifyme.com/blog/formula-feeding-vs-breastfeeding/" target="_blank" rel="noreferrer">
                  <h3>Formula Feeding vs Breastfeeding</h3>
                </a>

                <p>
                  We’re pretty sure that once you’ve had your little one, the dilemma of formula feeding vs breastfeeding must’ve crossed your mind. After all, you want your child to get the best nutritional nourishment from the best and safest source. Plus, in some cases due to whatever reason, a mother may not always be able to […]
                </p>
              </div>
            </article>

            <article className="blog">
            <div className="blog__image">
                <img src={blog3} alt="Father with his infant" width="100%" height="auto" />
              </div>

              <div className="blog__content">

                <a className="blog__updatedtime" href="https://immunifyme.com/#">
                  <svg className="blog__calendar" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                  </svg>
                  3 days ago
                </a>

                <a className="blog__author" href="https://immunifyme.com/#">
                  <span>By&nbsp;</span>Team ImmunifyMe
                </a>

                <a className="blog__title" href="https://immunifyme.com/blog/guide-to-introducing-seafood-to-babies/" target="_blank" rel="noreferrer">
                  <h3>Guide To Introducing Seafood To Babies</h3>
                </a>

                <p>
                  One thing we always worry about as parents is our child’s nutrition. We look up online forums, read various magazines just to find out which nutritious diet plans would be deemed best for our child. When it comes to proteins, we think of the classic milk, cheese, and yogurt as the only administrators. But not […]
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wordpress;