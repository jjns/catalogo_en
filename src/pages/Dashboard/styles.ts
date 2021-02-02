import styled from 'styled-components';
// import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #000000;
  max-width: 450px;
  line-height: 56px;

  margin-top: 60px;
`;

export const Products = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 12px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 100px;
      height: 100px;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #000000;
      }

      p {
        font-size: 18px;
        color: #000000;
        margin-top: 4px;
      }
    }

    strong {
      font-size: 20px;
      color: #000000;
      margin-left: auto;
    }
  }
`;
