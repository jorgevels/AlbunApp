import React from "react";
import { Container, LandPage } from "./styles";
import "../../assets/styles/App.scss";

const Home = () => (
  <>
    {/*  <Header /> */}
    <Container>
      <LandPage>
        <p>
          Diario y Álbum de <br />
          <span>Matias</span>
        </p>
      </LandPage>
    </Container>
  </>
);

export default Home;
