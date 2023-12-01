import styled from 'styled-components';

export const AboutSection = styled.section`
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const AboutHeader = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 272px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    width: 365px;
  }
`;

export const AboutDescription = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 354px;
    padding-left: 11px;
    border-left: 1px solid var(--hover-items-color);
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 621px;
    padding-left: 161px;
  }
`;

export const GridContainerFirst = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 159px 159px 342px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 274px 274px 596px;
    gap: 48px;
  }
`;

export const GridContainerSecond = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  column-gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 342px 159px 159px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 596px 274px 274px;
    column-gap: 48px;
  }
`;

export const Card = styled.div`
  padding: 12px;
  height: 197px;
  background-color: var(--secondary-background-color);

  @media screen and (min-width: 768px) {
    width: 159px;
  }

  @media screen and (min-width: 1280px) {
    padding: 48px 24px;
    width: 274px;
    height: 339px;
  }
`;

export const Image = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width:  342px
    height: 197px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    height: 339px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 33px;
  border-bottom: 1px solid var(--hover-items-color);
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    padding-bottom: 51px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 94px;
    margin-bottom: 24px;
  }
`;

export const CardIcon = styled.img`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const CardText = styled.p`
  text-align: justify;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
