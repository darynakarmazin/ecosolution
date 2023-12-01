import styled from 'styled-components';

export const ElectricitySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const ElectricityTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 96px;
  position: relative;

  &:before {
    content: '';
    width: 1px;
    height: 48px;
    background: #97d28b;
    display: block;
    position: absolute;
    left: 50%;
    bottom: -96px;
    transform: translateY(-50%);

    @media screen and (min-width: 768px) {
      height: 87px;
      bottom: -159px;
    }

    @media screen and (min-width: 1280px) {
      bottom: -147px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
    width: 386px;
    margin-bottom: 135px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    width: 491px;
    margin-bottom: 120px;
  }
`;

export const ElectricityAmount = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--main-font-color);
  font-family: var(--title-font);
  text-align: center;
  font-size: 24px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    gap: 24px;
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }

  span {
    color: var(--hover-items-color);
    text-align: center;
    font-size: 48px;
    width: 256px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 100px;
      width: 533px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 164px;
      width: 874px;
    }
  }
`;
