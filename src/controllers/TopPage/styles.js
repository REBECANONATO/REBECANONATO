import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1000;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  font-size: 25px;
  background: transparent;

  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
