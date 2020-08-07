import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  padding: 20px 10px;
  margin: 0px auto;

  @media (max-width: 48em) {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5em;
    behavior: smooth;

    h1 {
      font-family: 'Westline Script Demo';
      font-weight: bold;
      padding: 0 5px;
      color: #BA68C8;
      transition: color 0.4s;
      &:hover {
        color: ${shade(0.3, '#BA68C8')};
      }
    }
    span {
      color: #f4f7f6;
    }
  }
`;
export const Lista = styled.ul`
  display: flex;
  list-style: none;
  overflow: hidden;
  margin-right: 70px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-right: 0;
  }

  a {
    text-decoration: none;
    transition: color 0.4s;
    font-size: 19px;
    li {
      margin-left: 30px;
      color: #f4f7f6;
      @media (max-width: 48em) {
        margin: 1em 0 1em 0;
      }

      &:hover {
        color: ${shade(0.01, '#BA68C8')};
      }
    }
  }
`;
