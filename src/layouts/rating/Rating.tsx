import "./Rating.css";
import { SiCodereview } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Rating = () => {
  return (
    <div className="rating-container section--padding">
      <h2>
        Trusted by <span style={{ color: "brown" }}>millions</span> of company
        worldwide
      </h2>
      <div className="rating-box">
        <div className="rating-hr flex--center">
          <hr className="dash-hr" />
          <SiCodereview className="rating-icon " />
          <hr className="dash-hr" />
        </div>

        <div className="carousel-slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={3200}
            autoplay={{
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="carousel-card">
                <h4>
                  "Using this platform and networking with this company totally
                  changing live of million Communities globally.So, Everybody
                  please be a part of it.This company totally life changer and
                  have a full work opportunities."
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-card">
                <h4>
                  "I love this app is so good you can meet new people and watch
                  videos they're so funny. I've made so many friends"
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-card">
                <h4>
                  "TikTok has a rating of 1.56 stars from 160 reviews,
                  indicating that most customers are generally dissatisfied with
                  their purchases. Reviewers complaining about TikTok most
                  frequently mention social media, community guidelines, and
                  customer service problems. TikTok ranks 166th among Mobile
                  Applications sites."
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-card">
                <h4>
                  "This is genuinely such a great app, so many fun things to do,
                  same thing as youtube but shorter. Perfect for people who have
                  shorter attention spans."
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-card">
                <h4>
                  "Amazing service and quality, price as well. Very highly
                  recommended. I can recommend it to all my friends."
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Rating;
