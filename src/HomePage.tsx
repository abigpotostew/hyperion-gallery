import React from 'react';
import { Header } from "./components/header";
import { RandomToken } from "./components/random-token";
import { AllMintedGallery } from "./components/all-minted-gallery";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <Col>
      <RandomToken />
          </Col>
        </Row>
        <br/>
        <hr />
        <Row>
          <Col>
      <AllMintedGallery />
      </Col>
    </Row>
      </Container>
    </div>
  );
}

export default HomePage;
