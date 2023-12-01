import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LogoIcon from '../../img/logo.svg';
import ArrowIcon from '../../img/arrow.svg';
import {
  FixedHeader,
  HeaderWrapper,
  Logo,
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
        <Logo
          src={LogoIcon}
          alt="ecosolution company logo with phrase GREENERGY FOR LIFE"
        />

        <SideButtons>
          <BurgerMenu />
          <TouchLink href="#">
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
