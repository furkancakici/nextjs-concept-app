import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
       padding: 0;
       margin: 0;
       font-family: 'Kanit', sans-serif;
       min-width:320px;
       overflow-x:hidden;
       scroll-behavior: smooth;
    }

    *,
    *::before,
    *::after {
       box-sizing: border-box;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      border:none;
      outline:none;
    }
`;

export default GlobalStyle;
