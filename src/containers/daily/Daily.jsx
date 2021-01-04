import React from "react";
import Layout from "../../components/Layout/Layout";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../../components/CarouselDaily/CarouselItemDaily";
import PageLoading from "../../components/PageLoading";
import ParticlesBg from "particles-bg";
import useTvShowsApi from "../../hooks/useTvShowsApi";

const API = "https://api-albun.vercel.app/db%20copy.json";

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
const Diario = () => {
  const initialState = useTvShowsApi(API);
  return initialState.length === 0 ? (
    <PageLoading />
  ) : (
    <Layout>
      <div className="carousel">
        <div className="carousel__container">
          {
            <>
              <Carousel>
                {initialState.daily.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </>
          }
        </div>
      </div>
      <ParticlesBg type="custom" config={config} bg={true} />
    </Layout>
  );
};

export default Diario;
