import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;
    /* Disable selection highlighting to enhance desktop experience */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: sans-serif;
  }

  #root {
    height: 100%;
  }

  *:focus {
    outline: none !important;
  }
`;
