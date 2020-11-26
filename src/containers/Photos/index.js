import React from "react";
import Layout from "../../components/Layout";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../../components/CarouselItem";
import PageLoading from "../../components/PageLoading";
import useTvShowsApi from "../../hooks/useTvShowsApi";

const API = "https://api-test.jorgevelasquez006.vercel.app/API/db.json";

const App = () => {
  const initialState = useTvShowsApi(API);
  return initialState.length === 0 ? (
    <PageLoading />
  ) : (
    <Layout>
      <div className="carousel">
        <div className="carousel__container">
          {
            <Carousel>
              {initialState.trends.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          }
        </div>
      </div>
    </Layout>
  );
};

export default App;
