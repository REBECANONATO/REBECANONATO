import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 1.5em auto 6.5em auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto 2.5em auto;
    max-width: 100%;
  }
`;

export const SkillImgDiv = styled.div`
  width: 40%;
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
`;

export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  line-height: 2.8em;
  margin-top: 95px;
  h1 {
    font-size: 35px;
    color: #f4f7f6;
  }

  p {
    font-size: 18px;
    text-transform: uppercase;
    color: #fafcfc;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 30px;
    text-align: center;
    line-height: normal;
  }
`;

export const Icon = styled.ul`
  margin-bottom: 35px;
  list-style: none;
  color: #9c9ca1;
  font-size: 60px;
  display: flex;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }

  li {
    margin-right: 10px;

    &:hover {
      color: rgba(1, 1, 1, 0.1);
      transition: 0.3s ease-in;
    }
    &#html5:hover {
      transition: 0.3s ease-in;
      color: #eb5b28;
    }
    &#css3:hover {
      transition: 0.3s ease-in;
      color: #b77787;
    }
    &#javaScript:hover {
      transition: 0.3s ease-in;
      color: #F7DF1E;
    }
    &#angular:hover {
      transition: 0.3s ease-in;
      color: #dd0031;
    }
    &#dotNet:hover {
      transition: 0.3s ease-in;
      color: #2BA0C6;
    }
    &#postgres:hover {
      transition: 0.3s ease-in;
      color: #326690;
    }
    &#nodeJs:hover {
      transition: 0.3s ease-in;
      color: #78b162;
    }
    &#react:hover {
      transition: 0.3s ease-in;
      color: #00D7FF;
    }
    &#docker:hover {
      transition: 0.3s ease-in;
      color: #2496ed;
    }
    &#gitLab:hover {
      transition: 0.3s ease-in;
      color: #fc6d26;
    }
    &#npm:hover {
      transition: 0.3s ease-in;
      color: #CD3738;
    }
    &#trello:hover {
      transition: 0.3s ease-in;
      color: #0079bf;
    }
    &#visualStudio:hover {
      transition: 0.3s ease-in;
      color: #007acc;
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