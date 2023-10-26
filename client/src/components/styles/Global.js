import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0 auto;
        max-width: 1200px;
        font-family: 'Poppins', sans-serif;
    }

    hr {
        margin: 5em 0;
    }

`;

export default GlobalStyles;

// font-family: 'Roboto', sans-serif;
