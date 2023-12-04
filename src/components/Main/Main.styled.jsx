import styled from 'styled-components';

export const MainSection = styled.section`
  padding-top: 110px;

  @media screen and (min-width: 768px) {
    padding-top: 132px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 173px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainHeader = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    width: 485px;
  }
`;

export const Description = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 342px;
    margin-right: 96px;
    margin-bottom: 43px;
  }

  @media screen and (min-width: 1280px) {
    width: 363px;
    margin-bottom: 20px;
  }
`;

export const Link = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }
`;

export const LearnMoreLink = styled.a`
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  border: 1px solid var(--hover-items-color, #97d28b);
  color: #173d33;
  font-family: var(--main-font);
  font-size: 16px;
  line-height: 1.13;
  letter-spacing: -0.64px;
  transition: var(--transition-dur-and-func);

  div {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #97d28b;
    transition: var(--transition-dur-and-func);
  }

  &:hover,
  :focus {
    border: 1px solid var(--main-font-color, #173d33);
    background: var(--main-font-color, #173d33);
    color: var(--hover-items-color, #97d28b);

    div {
      background: var(--hover-items-color, #97d28b);
    }
  }
`;

export const ContsctLinks = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  border-top: 1px solid var(--hover-items-color);

  a {
    color: var(--main-font-color);
    font-family: var(--main-font);
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 12px 0 36px;
  }
`;

export const MainImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    img {
      width: 440px;
      max-width: 100%;
      height: auto;
    }
  }
`;
