import styled from "styled-components";
import { above, colors } from "../../styles/GlobalStyles";

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
    ${above.small`
    margin-top: 2vh;
    
  `}
  }

  p {
    margin-top: 30vh;
    font-size: 40px;
    text-align: center;
    color: ${colors.yellow};
    ${"" /* font-family: "Oleo Script"; */}
    font-family: 'Niconne', cursive;
    font-weight: 500;

    span {
      font-weight: 200;
    }

    ${above.small`
    margin-top: 25vh;
    font-size: 30px;
  `}
    ${above.mediu`
    margin-top: 25vh;
    font-size: 47px;
  `}

    ${above.medium`
    margin-top: 25vh;
    font-size: 47px;
  `}
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
