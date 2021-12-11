import './Testimonials.css';
import quoteLeft from '../../images/quote-sign-left.png';
import quoteRight from '../../images/quote-sign-right.png';

import { TESTIMONIALS } from '../../shared/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {  Pagination, Autoplay } from 'swiper';

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Pagination]);

const IMG = (imgName) => {
  return require(`../../images/testimonial/${imgName}`);
}

const Testimonials = () => {
  const slides = [];

  TESTIMONIALS.map((item, index) => {
    const imageSrc = (IMG(item.image) || {}).default;
    return (
    slides.push(
      <SwiperSlide key={item.id}>
        <div className="testimonial">
          <div className="testimonial__image">
            <img src={imageSrc} alt={item.author} width="75px" height="75px" />
          </div>

          <div className='testimonial__details'>
            {index % 2 === 0 ? < br/> : ''}
            <img src={quoteLeft} alt="quote left"/>
            <span>{item.quote}</span>
            <img src={quoteRight} alt="quote right"/>
            <footer className="testimonial__author">
              <cite title="Source Title">{item.author}</cite>
            </footer>
          </div>
        </div>
      </SwiperSlide>
    ))
  });

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials__subheading">
        comments we got from parents around the world!
      </div>

      <div className="testimonials__swipercontainer">
        <Swiper className="testimonials__swiper"
          pagination={{ clickable: true}}
          autoplay={{ delay: 8000 }}
          spaceBetween={30}
          slidesPerView={1}
          allowTouchMove={true}
          >
            {slides}
        </Swiper>
      </div>

    </section>
  )
}

export default Testimonials;