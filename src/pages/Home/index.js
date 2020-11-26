import React, { useState } from "react";
import { Container, LandPage } from "./styles";
import Menu from "../../components/Menu/MenuBlur";

const Home = () => {
  //Hooks
  const [pageBlur, setPageBlur] = useState("container");
  //Handle
  const traerBlur = (x) => setPageBlur(x);

  return (
    <Container>
      <div className="App">
        <Menu data={pageBlur} blur={traerBlur} />
      </div>
      <LandPage>
        <p>
          Diario y Álbum de <br />
          <span>Matias</span>
        </p>
      </LandPage>
    </Container>
  );
};

export default Home;
