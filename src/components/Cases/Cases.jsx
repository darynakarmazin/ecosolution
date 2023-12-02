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

import { ReactComponent as ArrowTOPRight } from '../../img/cases/arrow-right.svg';

function Cases() {
  return (
    <CasesSection>
      <CasesTitle>Successful cases of our company</CasesTitle>
      <div>
        <span>01 / 05</span>
        <div>
          <button>prev</button>
          <button>next</button>
        </div>
      </div>

      <CasesList>
        <li>
          <CasesItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`
          ${ZakhidnyiBuhImg1x} 1x,
          ${ZakhidnyiBuhImg2x} 2x
        `}
                width="596"
                height="296px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`
          ${ZakhidnyiBuhImg1x} 1x,
          ${ZakhidnyiBuhImg2x} 2x
        `}
                width="342"
                height="168"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`
          ${ZakhidnyiBuhImg1x} 1x,
          ${ZakhidnyiBuhImg2x} 2x
        `}
              />
              <img src={ZakhidnyiBuhImg1x} alt="Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”" />
            </picture>
            <CasesItemWrapper>
              <CasesDescription>
                <p>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </p>
                <button>
                  <ArrowTOPRight />
                </button>
              </CasesDescription>
              <CasesBottomInfo>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </CasesBottomInfo>
            </CasesItemWrapper>
          </CasesItem>
        </li>
        <li>
          <CasesItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`
          ${BoschImg1x} 1x,
          ${BoschImg2x} 2x
        `}
                width="596"
                height="296px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`
          ${BoschImg1x} 1x,
          ${BoschImg2x} 2x
        `}
                width="342"
                height="168"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`
          ${BoschImg1x} 1x,
          ${BoschImg2x} 2x
        `}
              />
              <img src={BoschImg1x} alt="Zhytomyr city Private Enterprise “Bosch”" />
            </picture>
            <CasesItemWrapper>
              <CasesDescription>
                <p>
                Zhytomyr city Private Enterprise “Bosch”
                </p>
                <button>
                  <ArrowTOPRight />
                </button>
              </CasesDescription>
              <CasesBottomInfo>
                <p>Solar Panels for industrial use</p>
                <p>November 2023</p>
              </CasesBottomInfo>
            </CasesItemWrapper>
          </CasesItem>
        </li>
        <li>
          <CasesItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`
          ${BiotechImg1x} 1x,
          ${BiotechImg2x} 2x
        `}
                width="596"
                height="296px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`
          ${BiotechImg1x} 1x,
          ${BiotechImg2x} 2x
        `}
                width="342"
                height="168"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`
          ${BiotechImg1x} 1x,
          ${BiotechImg2x} 2x
        `}
              />
              <img src={BiotechImg1x} alt="Rivne city Private Enterprise “Biotech”" />
            </picture>
            <CasesItemWrapper>
              <CasesDescription>
                <p>
                Rivne city Private Enterprise “Biotech”
                </p>
                <button>
                  <ArrowTOPRight />
                </button>
              </CasesDescription>
              <CasesBottomInfo>
                <p>Thermal modules</p>
                <p>Thermal modules3</p>
              </CasesBottomInfo>
            </CasesItemWrapper>
          </CasesItem>
        </li>
        <li>
          <CasesItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`
          ${HealthyFarmImg1x} 1x,
          ${HealthyFarmImg2x} 2x
        `}
                width="596"
                height="296px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`
          ${HealthyFarmImg1x} 1x,
          ${HealthyFarmImg2x} 2x
        `}
                width="342"
                height="168"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`
          ${HealthyFarmImg1x} 1x,
          ${HealthyFarmImg2x} 2x
        `}
              />
              <img src={HealthyFarmImg1x} alt="Kherson city Private Enterprise “HealthyFarm”" />
            </picture>
            <CasesItemWrapper>
              <CasesDescription>
                <p>
                Kherson city Private Enterprise “HealthyFarm”
                </p>
                <button>
                  <ArrowTOPRight />
                </button>
              </CasesDescription>
              <CasesBottomInfo>
                <p>Wind power</p>
                <p>September 2021</p>
              </CasesBottomInfo>
            </CasesItemWrapper>
          </CasesItem>
        </li>
        <li>
          <CasesItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`
          ${EnterpriseBiotechImg1x} 1x,
          ${EnterpriseBiotechImg2x} 2x
        `}
                width="596"
                height="296px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`
          ${EnterpriseBiotechImg1x} 1x,
          ${EnterpriseBiotechImg2x} 2x
        `}
                width="342"
                height="168"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`
          ${EnterpriseBiotechImg1x} 1x,
          ${EnterpriseBiotechImg2x} 2x
        `}
              />
              <img src={EnterpriseBiotechImg1x} alt="Zaporizhia city Private Enterprise “Biotech”" />
            </picture>
            <CasesItemWrapper>
              <CasesDescription>
                <p>
                Zaporizhia city Private Enterprise “Biotech”
                </p>
                <button>
                  <ArrowTOPRight />
                </button>
              </CasesDescription>
              <CasesBottomInfo>
                <p>Mini nuclear stations</p>
                <p>May 2021</p>
              </CasesBottomInfo>
            </CasesItemWrapper>
          </CasesItem>
        </li>

      </CasesList>
    </CasesSection>
  );
}

export default Cases;
