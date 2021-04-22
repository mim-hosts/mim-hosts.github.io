import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web');

  body {
    font-family: 'Titillium Web', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .thead-dark th {
    color: #fff;
    background-color: #343a40;
    border: 1px solid ${({ theme }) => theme.thBorderColor};
    padding: .75rem;
  }

  .App {
    text-align: center;
  }
`
