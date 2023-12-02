import LogoIcon from '../../img/logo.svg';
import { Logo } from '../Header/Header.styled';
import { ReactComponent as ArrowTop } from '../../img/arrow-up.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';

import {
  ContactLinks,
  FooterWrapper,
  NavigationButton,
  Social,
  Wrapper,
} from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper className="container">
      <Wrapper>
        <a href="./">
          <Logo
            src={LogoIcon}
            alt="ecosolution company logo with phrase GREENERGY FOR LIFE"
          />
        </a>
        <NavigationButton className="custom_prev" type="button">
          <ArrowTop />
        </NavigationButton>
      </Wrapper>
      <Social>
        <Instagram />
        <Facebook />
      </Social>
      <ContactLinks>
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
      </ContactLinks>
    </FooterWrapper>
  );
}

export default Footer;
