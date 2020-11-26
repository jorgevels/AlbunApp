import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: url("https://res.cloudinary.com/imagesfull/image/upload/v1605153448/Albun/Imagen5_lm0jkf.png")
    no-repeat center center fixed;
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
    margin-top: 250px;
    font-size: 40px;
    text-align: center;
    color: yellow;
    font-family: "Oleo Script";
    span {
      font-weight: 200;
    }
  }
`;

export { Container, LandPage };
