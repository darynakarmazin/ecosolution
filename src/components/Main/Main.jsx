import ArrowRightIcon from '../../img/arrow-right.svg';
import {
  ContsctLinks,
  Description,
  LearnMoreLink,
  Link,
  MainHeader,
  MainImg,
  MainSection,
  MainWrapper,
} from './Main.styled';
import MobwindTurbine1x from '../../img/main/mob-wind-turbine-clean-energy.jpg';
import MobwindTurbine2x from '../../img/main/mob-wind-turbine-clean-energy@2x.jpg';
import TabwindTurbine1x from '../../img/main/tab-wind-turbine-clean-energy.jpg';
import TabwindTurbine2x from '../../img/main/tab-wind-turbine-clean-energy@2x.jpg';
import DescwindTurbine1x from '../../img/main/deck-wind-turbine-clean-energy.jpg';
import DescwindTurbine2x from '../../img/main/deck-wind-turbine-clean-energy@2x.jpg';

function Main() {
  return (
    <MainSection>
      <MainWrapper>
        <MainHeader>RENEWABLE ENERGY For any task</MainHeader>
        <div>
          <Description>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Description>
          <Link>
            <LearnMoreLink href="#cases">
              Learn more
              <div>
                <img src={ArrowRightIcon} alt="arrow right icon" />
              </div>
            </LearnMoreLink>
          </Link>
        </div>
      </MainWrapper>

      <ContsctLinks>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/data=!4m2!3m1!1s0x473add6785a9dce5:0x92b4b3ec68e99c14?sa=X&ved=2ahUKEwj8oun6s-6CAxXAQPEDHeG8CWYQ8gF6BAgQEAA"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:office@ecosolution.com"
        >
          office@ecosolution.com
        </a>
        <p>ecosolution © 2023</p>
      </ContsctLinks>
      <MainImg>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`
          ${DescwindTurbine1x} 1x,
          ${DescwindTurbine2x} 2x
        `}
            width="1242"
            height="828"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`
          ${TabwindTurbine1x} 1x,
          ${TabwindTurbine2x} 2x
        `}
            width="708"
            height="550"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`
          ${MobwindTurbine1x} 1x,
          ${MobwindTurbine2x} 2x
        `}
          />
          <img src={DescwindTurbine1x} alt="wind turbine clean energy" />
        </picture>
      </MainImg>
    </MainSection>
  );
}

export default Main;
