import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Inter", sans-serif;
        padding: 20px;
        display: flex;
        box-sizing: border-box;
    }

    h1, h3, p, ul, div {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;

    }
`;
