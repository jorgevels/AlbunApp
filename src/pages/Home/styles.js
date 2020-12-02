import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
`;

const LandPage = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin-top: 10vh;
    padding: 0;
    width: 140px;
    position: absolute;
  }

  p {
    margin-top: 30vh;
    font-size: 40px;
    text-align: center;
    color: yellow;
    font-family: "Oleo Script";

    span {
      font-weight: 200;
    }
  }
`;

const LandPageFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;

  img {
  }
`;

export { Container, LandPage, LandPageFooter };
