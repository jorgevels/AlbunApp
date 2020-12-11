import { css, createGlobalStyle } from "styled-components";

export const colors = {
  obscure: "#1b1b25",
  darkBlue: "#1c3643",
  lightBlue: "#084b83",
  lightGreen: "#95ca3e",
  green: "#85c638",
  darkGreen: "#58902d",
  danger: "#ff463b",
  yellow: "#ffff00",
};

export const size = {
  small: 320,
  mediu: 411,
  medium: 414,
  mediumL: 768,
  large: 1024,
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:700i|Montserrat:400i&display=swap');
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-tap-highlight-color:transparent;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }
  h1 {
    text-align: center;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  
  

   ${"" /*  Mobile first */}
   
  body {
   background: radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1) !important;
    height: 90vh;
    margin: 0 auto;
    max-width: 500px; 
    overscroll-behavior: none;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    ${"" /* display:flex; */}
     align-items: center; 

  }

.carousel-root {
  
    align-items: center;
     

}
  .carousel .slide {
  display:flex;
  align-items: center;
  height: 100vh;
  background: transparent !important;  
}

.carousel .carousel-status {
  ${"" /* display:none; */}
    position: absolute;
    top: 0;
    margin-right: 1rem !important;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    color: #fff;
}

.carousel .thumbs-wrapper {
  margin: 0px !important;
  overflow: hidden;
}

.carousel .control-dots {
    position: absolute;
    bottom: 0;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    width: 100%;
    display: none;
}
 
`;
