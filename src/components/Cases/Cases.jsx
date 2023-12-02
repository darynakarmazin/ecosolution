import { useState } from 'react';
import { ReactComponent as ArrowTOPRight } from '../../img/cases/arrow-right.svg';
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
  CasesBottomInfo,
  CasesDescription,
  CasesItem,
  CasesItemWrapper,
  CasesList,
  CasesSection,
  CasesTitle,
} from './Cases.styles';

function Cases() {
  const slides = [
    {
      image1x: ZakhidnyiBuhImg1x,
      image2x: ZakhidnyiBuhImg2x,
      alt: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
      description: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CasesSection>
      <CasesTitle>Successful cases of our company</CasesTitle>
      <div>
        <span>{`${currentIndex + 1} / ${slides.length}`}</span>
        <div>
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>

      <CasesList>
        {slides.map((slide, index) => (
          <li key={index}>
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
        ))}
      </CasesList>
    </CasesSection>
  );
}

export default Cases;
