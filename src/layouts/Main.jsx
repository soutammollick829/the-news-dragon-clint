import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LaftSideNav from "../pages/laft-side-nav/LaftSideNav";
import RightSideNav from "../pages/right-side-nav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
            <LaftSideNav/>
          </Col>
          <Col lg={6}>
          <Outlet />
          </Col>
          <Col lg={3}>
            <RightSideNav/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
