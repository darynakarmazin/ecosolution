import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(1) translate(-50%, -50%);
  padding-top: 36px;
  padding-bottom: 36px;
  height: 100vh;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding-top: 42px;
    padding-bottom: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const ModalContent = styled.div`
  padding: 24px;
  margin-left: auto;
  width: 320px;
  height: 100%;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);

  @media screen and (min-width: 1280px) {
    width: 365px;
  }
`;

export const ButtonWrp = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid #fff;
  margin-bottom: 24px;
`;

export const ButtonClose = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #fff;
  background: transparent;
  border: none;
  font-family: var(--main-font);
  font-size: 20px;
  letter-spacing: -0.8px;

  &:hover {
    svg path {
      stroke: var(--hover-items-color);
    }
    color: var(--hover-items-color);
  }
`;

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalItem = styled.li`
  color: rgba(255, 255, 255, 0.25);
  font-family: var(--main-font);
  font-size: 24px;
  letter-spacing: -0.96px;
  svg path {
    stroke: rgba(255, 255, 255, 0.25);
  }

  &:hover {
    color: #fff;
    svg path {
      stroke: #fff;
    }
  }

  &:active {
    color: var(--hover-items-color);
    svg path {
      stroke: var(--hover-items-color);
    }
  }
`;
