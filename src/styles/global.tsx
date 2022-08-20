import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {

        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Montserrat,sans-serif;
        
    }  
    :root {
        --white: #FFF;
        --purple: #aa33b5;
        --dark-blue: #14152c;

    }
`;
export default GlobalStyle;
