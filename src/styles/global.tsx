import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {

        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Montserrat,sans-serif;
        color: var(--white);
        font-weight:600 ;
    }  
    :root {
        --white: #FFF;
        --purple: #aa33b5;
        --dark-blue: #14152c;
        --gray: #666;
        --red-error: #ff0000;
    }
`;
export default GlobalStyle;
