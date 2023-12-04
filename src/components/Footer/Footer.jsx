import { ReactComponent as ArrowTop } from '../../img/arrow-up.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';

import { ReactComponent as Logo } from '../../img/logo/logo.svg';
import { ReactComponent as Logo2 } from '../../img/logo/logo-part-2.svg';
import { ReactComponent as Logo3 } from '../../img/logo/logo-part-3.svg';

import {
  ContactLinks,
  FooterRow,
  FooterWrapper,
  LogoBtn,
  LogoLink,
  NavigationButton,
  Social,
  Wrapper,
} from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper className="container">
      <FooterRow>
        <Wrapper>
          <LogoBtn href="#" aria-label="Go to the homepage">
            <LogoLink>
              <Logo />
              <div>
                <Logo2 />
              </div>
              <Logo3 />
            </LogoLink>
          </LogoBtn>
          <NavigationButton href="#" type="button" aria-label="Go to Top">
            <ArrowTop />
          </NavigationButton>
        </Wrapper>
        <Social>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/"
            aria-label="Visit our Facebook page"
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/"
            aria-label="Visit our Instagram profile"
          >
            <Instagram />
          </a>
        </Social>
      </FooterRow>
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
