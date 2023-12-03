import { useState } from 'react';
import { ReactComponent as ArrowTOPRight } from '../../img/cases/arrow-top-right.svg';
import { ReactComponent as ArrowLeft } from '../../img/cases/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../img/cases/arrow-right.svg';
import ZakhidnyiBuhImg1x from '../../img/cases/zakhidnyi-buh.jpg';
import ZakhidnyiBuhImg2x from '../../img/cases/zakhidnyi-buh@2x.jpg';
import BoschImg1x from '../../img/cases/bosch.jpg';
import BoschImg2x from '../../img/cases/bosch@2x.jpg';
import BiotechImg1x from '../../img/cases/biotech.jpg';
import BiotechImg2x from '../../img/cases/biotech@2x.jpg';
import HealthyFarmImg1x from '../../img/cases/healthy-farm.jpg';
import HealthyFarmImg2x from '../../img/cases/healthy-farm@2x.jpg';
import EnterpriseBiotechImg1x from '../../img/cases/enterprise-biotech.jpg';
import EnterpriseBiotechImg2x from '../../img/cases/enterprise-biotech@2x.jpg';
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

function Cases() {
  const slides = [
    {
      image1x: ZakhidnyiBuhImg1x,
      image2x: ZakhidnyiBuhImg2x,
      alt: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
      description:
        'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
      info: {
        title: 'Wind Power for auto field irrigation',
        date: 'July 2023',
      },
    },
    {
      image1x: BoschImg1x,
      image2x: BoschImg2x,
      alt: 'Zhytomyr city Private Enterprise “Bosch”',
      description: 'Zhytomyr city Private Enterprise “Bosch”',
      info: {
        title: 'Solar Panels for industrial use',
        date: 'November 2023',
      },
    },
    {
      image1x: BiotechImg1x,
      image2x: BiotechImg2x,
      alt: 'Rivne city Private Enterprise “Biotech”',
      description: 'Rivne city Private Enterprise “Biotech”',
      info: {
        title: 'Thermal modules',
        date: 'Thermal modules3',
      },
    },
    {
      image1x: HealthyFarmImg1x,
      image2x: HealthyFarmImg2x,
      alt: 'Kherson city Private Enterprise “HealthyFarm”',
      description: 'Kherson city Private Enterprise “HealthyFarm”',
      info: {
        title: 'Wind power',
        date: 'September 2021',
      },
    },
    {
      image1x: EnterpriseBiotechImg1x,
      image2x: EnterpriseBiotechImg2x,
      alt: 'Zaporizhia city Private Enterprise “Biotech”',
      description: 'Zaporizhia city Private Enterprise “Biotech”',
      info: {
        title: 'Mini nuclear stations',
        date: 'May 2021',
      },
    },
  ];

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
            <CasesNavigationButton className="custom_prev" type="button">
              <ArrowLeft />
            </CasesNavigationButton>
            <CasesNavigationButton className="custom_next" type="button">
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
                      <button>
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
