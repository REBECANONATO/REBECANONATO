import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 90%;
  padding: 20px 10px;
  margin: 5em auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
`;

export const ContactDiv = styled.div`
  width: 60%;
  margin-left:15%;

  h1 {
    margin-top: 1em;
    font-size: 30px;
    color: #BA68C8;
  }

  p {
    line-height: 2.3rem;
    font-size: 22px;
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.1, '#BA68C8')};
      }
    }

    b {
      text-decoration: none;
      color: #fff;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.1, '#BA68C8')};
        }
    }
  }

  span {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: wave;
    display: inline-block;
    transform-origin: 70% 70%;

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(-26deg);
      }
      20% {
        transform: rotate(28deg);
      }
      30% {
        transform: rotate(-26deg);
      }
      40% {
        transform: rotate(26deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
  
`;

export const ContactImgDiv = styled.div`
  width: 40%;

  img {
    max-width: 100%;
    height: auto;
    margin-left: 40px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
