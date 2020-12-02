import React, { useState } from "react";
import { Container, LandPage, LandPageFooter } from "./styles";
import Menu from "../../components/Menu/MenuBlur";
import Edad from "../../components/Edad";

const Logo =
  "https://res.cloudinary.com/imagesfull/image/upload/v1606842155/Albun/Imagen5_qv3lsu.png";
const Footer =
  "https://res.cloudinary.com/imagesfull/image/upload/v1606866675/Albun/footer_c3wnbr.png";

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
        <img src={Logo} alt="Logo" />
        <p>
          Diario y Álbum de <br />
          <span>Matias</span>
        </p>
      </LandPage>
      <Edad />
      <LandPageFooter>
        <img src={Footer} alt="Logo" />
      </LandPageFooter>
    </Container>
  );
};

export default Home;
