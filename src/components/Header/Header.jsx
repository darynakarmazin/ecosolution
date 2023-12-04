import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { ReactComponent as Logo } from '../../img/logo/logo.svg';
import { ReactComponent as Logo2 } from '../../img/logo/logo-part-2.svg';
import { ReactComponent as Logo3 } from '../../img/logo/logo-part-3.svg';
import ArrowIcon from '../../img/arrow.svg';
import {
  FixedHeader,
  HeaderWrapper,
  LogoBtn,
  LogoLink,
  SideButtons,
  TouchLink,
} from './Header.styled';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 36);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FixedHeader
      style={{ backgroundColor: isScrolled ? '#ffffff' : '#F3F5FA' }}
    >
      <HeaderWrapper className="container">
        <LogoBtn href="#" aria-label="Go to the homepage">
          <LogoLink>
            <Logo />
            <div>
              <Logo2 />
            </div>
            <Logo3 />
          </LogoLink>
        </LogoBtn>

        <SideButtons>
          <BurgerMenu />
          <TouchLink href="#contactUs">
            Get in touch
            <div>
              <img src={ArrowIcon} alt="arrow icon" />
            </div>
          </TouchLink>
        </SideButtons>
      </HeaderWrapper>
    </FixedHeader>
  );
}

export default Header;
