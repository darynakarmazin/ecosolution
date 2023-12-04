import styled from 'styled-components';

export const FaqSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 36px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    gap: 185px;
    padding-top: 120px;
  }
`;

export const FaqTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    display: none;
    font-size: 36px;
    width: 347px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    width: 398px;
  }
`;

export const FaqTitleTab = styled.h2`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 36px;
    width: 347px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    width: 398px;
  }
`;

export const FaqList = styled.ul`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
  }
`;

export const FaqListItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  border-top: 1px solid var(--hover-items-color);
  padding: 16px 0;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const FaqButton = styled.button`
  border: none;
  background: transparent;
  margin-top: 21px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FaqQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const FaqQuestion = styled.p`
  text-align: justify;
  font-size: 18px;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const FaqAnsver = styled.p`
  text-align: justify;
  font-size: 14px;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const FaqAddinionalWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const FaqAddinionalLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
  }
`;

export const TouchLink = styled.a`
  display: inline-flex;
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
`;

export const FaqAddQues = styled.p`
  font-size: 18px;
  letter-spacing: -0.72px;
  text-align: center;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
