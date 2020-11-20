import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: url("https://res.cloudinary.com/imagesfull/image/upload/v1604438795/Albun/Portada_jovsbg.jpg")
    no-repeat center center fixed;

  ${"" /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */}
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

/* const LandPageFondo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`; */

const LandPageTitle = styled.div`
  ${"" /* display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center; */}

  ${"" /* h1 {
    margin-top: 400px;
    color: white;
    font-size: 24px;
    text-align: center;
    position: absolute;
  } */}
`;

const LandPage = styled.div`
  display: flex;
  justify-content: center;

  img {
    padding: 0;
    width: 140px;
    margin-top: -20px;
    position: absolute;
  }

  p {
    margin-top: 100px;
    ${"" /* color: blue; */}
    font-size: 40px;
    text-align: center;
    ${"" /* background-image: none; */}
    color: yellow;
    font-family: "Oleo Script";
    span {
      font-weight: 200;
    }
  }
`;

export { Container, LandPage, LandPageTitle };
