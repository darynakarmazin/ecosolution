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
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 120px;
  }
`;

export const ContactContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 122px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    gap: 178px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 244px;
  }

  @media screen and (min-width: 1280px) {
    width: 466px;
  }
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

  &:hover,
  :focus {
    svg path {
      stroke: var(--hover-items-color);
    }

    @media screen and (min-width: 1280px) {
      max-width: 100%;
    }
  }
`;

export const ContactRowSocial = styled.div`
  display: flex;
  gap: 8px;
  align-item: center;

  a {
    color: var(--main-font-color);
    font-family: var(--main-font);
    font-size: 20px;
    letter-spacing: -0.8px;
    max-width: 212px;

    &:hover,
    :focus {
      svg path {
        stroke: var(--hover-items-color);
      }
    }
  }
`;

export const Form = styled.form`
  background-color: var(--secondary-background-color);
  padding: 36px 12px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: var(--main-font-color);
  font-family: var(--main-font);
  font-size: 16px;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: var(--main-font-color);
  font-family: var(--main-font);
  font-size: 18px;
  letter-spacing: -0.72px;
  outline: none;
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${props => (props.hasError ? '#D28B8B' : 'var(--hover-items-color)')};
`;

export const Textarea = styled.textarea`
  height: 124px;
  background-color: transparent;
  border: none;
  color: var(--main-font-color);
  font-family: var(--main-font);
  font-size: 18px;
  letter-spacing: -0.72px;
  outline: none;
  resize: none;
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${props => (props.hasError ? '#D28B8B' : 'var(--hover-items-color)')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: transparent;
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
