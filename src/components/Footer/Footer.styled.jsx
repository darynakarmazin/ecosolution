import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  padding-top: 16px;
  border-top: 1px solid var(--hover-items-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Social = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const NavigationButton = styled.button`
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
  flex-direction: column;
  align-items: center;
`;
