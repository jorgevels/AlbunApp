import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url("https://res.cloudinary.com/imagesfull/image/upload/v1587758568/like/stars_jwrc2k.svg"),
    #85c638;

  overflow: hidden;
  color: #1b1b25;
  text-align: center;

  h1 {
    font-size: 25px;
  }

  img {
    width: 200px;
    margin: 50px 0;
  }
`;

export default Container;
