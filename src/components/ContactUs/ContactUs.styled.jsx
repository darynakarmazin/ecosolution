import styled from 'styled-components';

export const ContactUsSection = styled.section`
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const ContactUsTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  position: relative;
  text-align: center;

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

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ContactListTitle = styled.p`
  font-size: 16px;
  letter-spacing: -0.64px;
`;

export const ContactRow = styled.div`
  display: flex;
  gap: 8px;
  align-item: center;

  a {
    color: var(--main-font-color);
    font-family: var(--main-font);
    font-size: 20px;
    letter-spacing: -0.8px;
    max-width: 212px;
  }
`;

export const Form = styled.form``;

export const Input = styled.input``;

export const Textarea = styled.textarea``;

export const Button = styled.button``;
