import styled from 'styled-components';

export const FixedHeader = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  transition: var(--transition-dur-and-func);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 36px;
`;

export const Logo = styled.img`
  width: 269px;
  height: 40px;
`;

export const SideButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const TouchLink = styled.a`
  display: none;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  background: var(--hover-items-color, #97d28b);
  color: var(--main-font-color, #173d33);
  font-family: var(--main-font);
  font-size: 16px;
  letter-spacing: -0.64px;
  transition: var(--transition-dur-and-func);

  div {
    width: 14px;
    height: 14px;
    background: #173d33;
    border-radius: 50%;
    transition: var(--transition-dur-and-func);
  }

  &:hover,
  :focus {
    background: #173d33;
    color: #97d28b;

    div {
      background: #97d28b;
    }
  }
  @media screen and (min-width: 768px) {
    display: inline-flex;
  }
`;
