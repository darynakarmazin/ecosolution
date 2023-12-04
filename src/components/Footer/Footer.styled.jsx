import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 16px;
  border-top: 1px solid var(--hover-items-color);
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const LogoBtn = styled.a``;

export const LogoLink = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  &:hover,
  :focus {
    div {
      svg path {
        fill: #97d28b;
      }
    }
  }
`;

export const FooterRow = styled.div`
  width: 100%;
  gap: 9px;
  align-items: center;
  position: relative;
`;

export const Social = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;

  a {
    &:hover,
    :focus {
      svg path {
        stroke: var(--hover-items-color);
      }
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(100%, -50%);
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NavigationButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  border: none;
  border-radius: 100px;
  background: #97d28b;
  transition: var(--transition-dur-and-func);

  img {
    width: 16px;
    height: 16px;
    transition: var(--transition-dur-and-func);
  }

  &:hover,
  :focus {
    background: #173d33;
    svg path {
      stroke: #97d28b;
    }

`;

export const ContactLinks = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  color: var(--main-font-color);
  font-family: var(--main-font);
  font-size: 16px;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
  }
`;
