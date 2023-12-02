import styled from 'styled-components';

export const CasesSection = styled.section`
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 124px;
  }
`;

export const CasesTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    width: 264px;
    margin-bottom: 38px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    width: 398px;
    margin-bottom: 120px;
  }
`;

export const CasesList = styled.ul`
  display: flex;
  overflow: hidden;
//   flex-wrap: wrap;
  gap: 24px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;

export const CasesItem = styled.div`
  max-width: 100%;
  height: auto;
  background: #eaedf1;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 322px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    height: 506px;
  }

  @media screen and (max-width: 767px) {
    img {
      width: 440px;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const CasesItemWrapper = styled.div`
  padding: 24px 12px 12px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding: 38px 48px;
  }
`;

export const CasesDescription = styled.div`
  display: flex;
  gap: 61px;
  justify-content: space-between;
  height: 87px;
  border-bottom: 1px solid var(--hover-items-color);
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    height: 88px;
  }

  @media screen and (min-width: 1280px) {
    height: 92px;
    margin-bottom: 24px;
  }

  p {
    width: 175px;
    font-size: 18px;
    letter-spacing: -0.72px;

    @media screen and (min-width: 768px) {
      width: 230px;
      font-size: 20px;
      letter-spacing: -0.8px;
    }

    @media screen and (min-width: 1280px) {
      width: 261px;
      font-size: 24px;
      letter-spacing: -0.96px;
    }
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    padding: 16px;
    gap: 10px;
    border: none;
    border-radius: 100px;
    background: #97d28b;
    transition: var(--transition-dur-and-func);

    img {
      width: 28px;
      height: 28px;
      transition: var(--transition-dur-and-func);
    }

    &:hover,
    :focus {
      background: #173d33;
      svg path {
  stroke: #97d28b; 
    }
  }
`;

export const CasesBottomInfo = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
    letter-spacing: -0.48px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
      }
    
      @media screen and (min-width: 1280px) {
        font-size: 16px;
      }
  }
`;
