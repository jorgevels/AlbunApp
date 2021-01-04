/* import React, { useState } from "react";
import { Container, LandPage, LandPageFooter } from "./styles";
import Menu from "../../components/Menu/MenuBlur";
import Edad from "../../components/Edad";
import ParticlesBg from "particles-bg";

const Logo =
  "https://res.cloudinary.com/imagesfull/image/upload/v1606842155/Albun/Imagen5_qv3lsu.png";
const Footer =
  "https://res.cloudinary.com/imagesfull/image/upload/v1606866675/Albun/footer_c3wnbr.png";

const Prueba = () => {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15,
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }


  const [pageBlur, setPageBlur] = useState("container");
  
  const traerBlur = (x) => setPageBlur(x);

  return (
    <Container>
      <div className="App">
        <Menu data={pageBlur} blur={traerBlur} />
      </div>
      <LandPage>
        <img src={Logo} alt="Logo" />
        <p>
          Prueba de <br />
          <span>Login</span>
        </p>
      </LandPage>
      <Edad />
      <LandPageFooter>
        <img src={Footer} alt="Logo" />
      </LandPageFooter>
      <ParticlesBg type="custom" config={config} bg={true} />
    </Container>
  );
};

export default Prueba;
 */
