import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --blue-light: #6933FF;
    --grenn: #33CC95;
    --red: #E62E4D;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size padrao em desktop: 16px
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px 
    }
   }

  body {
    background: var(--background);
     // faz com que a fonte fique com melhor definicao na engine do chrome: 
    -webkit-font-smoothing: antialiased;
   
  }

  button {
    cursor: pointer;
  }

  // qualquer elemento desabilitado tera isso:
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`