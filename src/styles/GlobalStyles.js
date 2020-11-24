import { createGlobalStyle } from "styled-components";

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
    height: 100vh;
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
   ${"" /*  margin-top:0.3rem; */}
   display:flex;
    background: red ;
    align-items: center;
    height: 100vh;
    
    ${
      "" /* background: radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1) !important ; */
    }
}

.carousel .carousel-status {
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
   ${"" /*  margin: 20px; */}
     margin: 0px !important;
    overflow: hidden;
}

  ${
    "" /* #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    overflow-y: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  } */
  }
`;
