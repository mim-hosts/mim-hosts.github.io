import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Titillium Web', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  th {
    border: 1px solid ${({ theme }) => theme.thBorderColor};
  }

  .App {
    text-align: center;
  }
`
