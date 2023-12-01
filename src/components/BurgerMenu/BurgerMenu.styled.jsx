import styled from 'styled-components';

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11.5px 12px;
  border: none;
  border-radius: 50%;
  background-color: var(--items-color, #dcefd8);
  transition: var(--transition-dur-and-func);

  &:hover,
  :focus {
    background-color: var(--hover-items-color, #97d28b);
  }
`;
