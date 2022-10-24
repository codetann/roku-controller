import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Inter", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.blackAlpha[900]};
    color: white;
    overflow: hidden;
  }
`;

export { GlobalStyle };
