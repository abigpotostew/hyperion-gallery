import React from 'react';
import { Header } from "./components/header";
import { RandomToken } from "./components/random-token";
import { AllMintedGallery } from "./components/all-minted-gallery";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { BrandedHomepage } from "./components/branded-homepage";

function HomePage() {
  return (
    <div className="App">
      <Header/>
      <Container fluid>
        <Row>
          <Col>
            <RandomToken/>
          </Col>
        </Row>
        <br/>
        <hr/>
        <Row>
          <Col>
            {/*<AllMintedGallery />*/}
            <BrandedHomepage/>
          </Col>
        </Row>
        <br/>
        <hr/>
        <Row>
          <Col className={'text-center'}>
            <p> Created with 💙 by skymagic.eth</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
