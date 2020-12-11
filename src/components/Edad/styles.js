import styled from "styled-components";
import { above, colors } from "../../styles/GlobalStyles";

const Container = styled.div``;

const LandPage = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin-top: 8vh;
    font-size: 30px;
    line-height: 1em;
    text-align: center;
    color: white;
    font-family: "Shadows Into Light", cursive;
    font-weight: 700;
    span {
      font-family: "Shadows Into Light Two", cursive;
      color: ${colors.lightBlue};
      font-weight: 600;
    }
    ${above.small`
     font-size: 25px;
    `}
    ${above.mediu`
    font-size: 30px;
  `}

    ${above.medium`
    font-size: 30px;
  `}
  }
`;

export { Container, LandPage };
