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
          <Col className={'section-homepage'}>
            <RandomToken/>
          </Col>
        </Row>
        <br/>
        <Row >
          <Col/>
          <Col sm={11} md={10} lg={10} xl={10} xxl={10} className={'text-center'}>
            <hr/>
          </Col>
          <Col/>
        </Row>
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
