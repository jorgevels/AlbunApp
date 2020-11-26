import React from "react";
import { Navigation, Drawer, Content } from "react-mdl";
import "../styles/Drawer.css";

const Drawers = () => {
  return (
    <>
      <Drawer
        title={
          <>
            <a href="/" style={{ textDecoration: "none", fontSize: "20px" }}>
              <i className="fa fa-briefcase" />
              Portafolio
            </a>
          </>
        }
      >
        <Navigation>
          <a href="/curriculum" style={{ fontSize: "20px" }}>
            <i className="fa fa-graduation-cap" aria-hidden="true" />
            Currículum
          </a>
        </Navigation>
      </Drawer>

      <Content>
        <div className="page-content" />
      </Content>
    </>
  );
};

export default Drawers;
