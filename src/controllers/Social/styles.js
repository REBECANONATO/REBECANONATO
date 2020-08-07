import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  a {
    color: #9c9ca1;
    font-size: 2.4em;
    height: 2.6rem;
    line-height: 2.6rem;
    margin-right: 30px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;

    &#apresentacao:hover {
      transition: 0.5s;
      color: #F4F7F6;
    }
    &#github:hover {
      transition: 0.5s;
      color: #F6F8FA;
    }
    &#stack:hover {
      transition: 0.5s;
      color: #f48024;
    }
    &#linkedin:hover {
      transition: 0.5s;
      color: #0077b5;
    }
    &#curriculo:hover {
      transition: 0.5s;
      color: #F4F7F6;
    }
    &#email:hover {
      transition: 0.5s;
      color: #973227;
    }
    &#whats:hover {
      transition: 0.5s;
      color: #56f672;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    max-width: 100%;
  }
`;
