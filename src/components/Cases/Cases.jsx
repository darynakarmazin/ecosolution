import { useState } from 'react';
import { ReactComponent as ArrowTOPRight } from '../../img/cases/arrow-top-right.svg';
import { ReactComponent as ArrowLeft } from '../../img/cases/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../img/cases/arrow-right.svg';
import {
  Buttons,
  CasesBottomInfo,
  CasesDescription,
  CasesItem,
  CasesItemWrapper,
  CasesList,
  CasesNavigation,
  CasesNavigationButton,
  CasesNavigationCount,
  CasesSection,
  CasesTitle,
  CasesWrapper,
} from './Cases.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import { useMediaQuery } from 'react-responsive';
import { slides } from '../data/slides';

function Cases() {
  const [count, setCount] = useState(1);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  let slidesPerView = 2;

  if (isMobile) {
    slidesPerView = 1;
  } else {
    slidesPerView = 2;
  }

  return (
    <CasesSection id="cases">
      <CasesWrapper>
        <CasesTitle>Successful cases of our company</CasesTitle>

        <CasesNavigation>
          <CasesNavigationCount>
            <span style={{ color: '#173D33' }}>0{count}</span> /05
          </CasesNavigationCount>
          <Buttons>
            <CasesNavigationButton
              className="custom_prev"
              type="button"
              aria-label="Previous slide"
            >
              <ArrowLeft />
            </CasesNavigationButton>
            <CasesNavigationButton
              className="custom_next"
              type="button"
              aria-label="Next slide"
            >
              <ArrowRight />
            </CasesNavigationButton>
          </Buttons>
        </CasesNavigation>
      </CasesWrapper>

      <Swiper
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop={true}
        onSlideChange={swiper => setCount(swiper.realIndex + 1)}
        navigation={{
          nextEl: '.custom_next',
          prevEl: '.custom_prev',
        }}
        modules={[Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CasesList>
              <li>
                <CasesItem>
                  <picture>
                    <source
                      media="(min-width: 1280px)"
                      srcSet={`${slide.image1x} 1x, ${slide.image2x} 2x`}
                      width="596"
                      height="296px"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={`${slide.image1x} 1x, ${slide.image2x} 2x`}
                      width="342"
                      height="168"
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet={`${slide.image1x} 1x, ${slide.image2x} 2x`}
                    />
                    <img src={slide.image1x} alt={slide.alt} />
                  </picture>
                  <CasesItemWrapper>
                    <CasesDescription>
                      <p>{slide.description}</p>
                      <button aria-label="See more">
                        <ArrowTOPRight />
                      </button>
                    </CasesDescription>
                    <CasesBottomInfo>
                      <p>{slide.info.title}</p>
                      <p>{slide.info.date}</p>
                    </CasesBottomInfo>
                  </CasesItemWrapper>
                </CasesItem>
              </li>
            </CasesList>
          </SwiperSlide>
        ))}
      </Swiper>
    </CasesSection>
  );
}

export default Cases;
