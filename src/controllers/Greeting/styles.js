import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 5.5em auto;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

export const GrettingTextDiv = styled.div`
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  width: 55%;
  h1 {
    font-size: 45px;
    color: #f4f7f6;
  }
  p {
    color: #fafcfc;
    font-size: 22px;
    margin: 10px 0;
  }
  span {
    font-size: 22px;
    margin: 10px 0;
    font-style: italic;
    color:#BA68C8;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const GrettingImgDiv = styled.div`
  width: 36%;
  img {
    max-width: 75%;
    height: auto;
    top: 70px;
    right: 0;
  }
  @media (max-width: 768px) {
    width: 90%;
    img {
      max-width: 100%;
    }
  }
`;

export const GrettingButtonDiv = styled.div`
  .button {
      width: 50%;
      height: 60px;
      background-color: #BA68C8;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
  }

  .button:hover {
    filter: brightness(90%);
  }
`;