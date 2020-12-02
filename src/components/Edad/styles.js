import styled from "styled-components";

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
      ${"" /* font-family: "Share Tech Mono", monospace; */}
      font-family: 'Shadows Into Light Two', cursive;

      color: #084b83;
      font-weight: 600;
    }
  }
`;

export { Container, LandPage };
