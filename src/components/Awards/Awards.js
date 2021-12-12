import './Awards.css';
import { AWARDS } from '../../shared/awards';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import "swiper/swiper.min.css";
SwiperCore.use([Autoplay, Pagination]);

const IMG = (imgName) => {
  return require(`../../images/awards/${imgName}`);
} 

const Award = ({item}) => {
  const imageSrc = (IMG(item.image) || {}).default;
  return (
    <div className="awards_image">
      <img src={imageSrc} alt={item.alt} width="100%" height="auto" />
    </div>
  )
}

const Awards = () => {
  const slides = [];

  AWARDS.map((awardList, index) => {
    return (
      slides.push(
        <SwiperSlide key={"awardList" +index} className="awards__items">
          <div className="awards_images">
            {awardList.map(item => <Award key={item.id} item={item} />)}
          </div>
        </SwiperSlide>
      )
    )
  })
  return (
    <section className="awards">
      <h2>Awards & Grants</h2>
      <div className="awards__content">
        <div className="container">
          <div className="awards__row">
            <Swiper className="awards__swiper"
            pagination={{ clickable: true}}
            autoplay={{ delay: 8000 }}
            spaceBetween={50}
            slidesPerView={1}
            allowTouchMove={false}
            loop={true}
            speed={600}
            >
              {slides}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards;