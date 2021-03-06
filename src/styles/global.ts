import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f7e7ce;
    -webkit-font-smothing: antialiased;
  }

  body, input, button {
    font: 16px Montserrat, sans-serif;
  }

  #root {
    width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
