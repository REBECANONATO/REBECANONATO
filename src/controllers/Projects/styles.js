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

export const ProjectsTextDiv = styled.div`
  display: flex;
  margin-top: 5em;
  flex-direction: column;
  width: 90%;

    .profile-container {
        width: 100%;
        max-width: 1180px;
        padding: 0 30px;
        margin: 32px auto;
    }

    .profile-container ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 24px;
        list-style: none;
    }

    .profile-container ul .button {
      text-decoration: none;
      background: #f0f0f0;
      padding: 0;
      position: relative;
      border-radius: 8px;
    }

    .profile-container ul .button:hover {
        filter: brightness(70%);
      }

    .profile-container ul .button li strong {
        display: block;
        margin-bottom: 5px;
        margin-top: 5px;
        color: #5D3464;
        margin-left: 15px;
    }

    .profile-container ul .button li p + strong {
        margin-top: 5px;
        margin-left: 15px;
    }
    
    .profile-container ul .button li p {
      color: #000;
      line-height: 21px;
      font-size: 16px;
      text-transform: capitalize;
      margin-left: 15px;
    }

  h1 {
    font-size: 45px;
    color: #f4f7f6;
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
