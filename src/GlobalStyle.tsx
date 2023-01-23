import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: #0e1129;
        padding: 2em;
    }

    p {
        text-align: center;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;
