import { Col, Row } from "react-bootstrap";
import React from "react";

export const Footer = ()=>{
  return (
    <>
    <br/>
  <hr/>
      <footer>
  <Row>
    <Col className={'text-center'}>
      <p className={'footer-text'}> Created with 💙 by skymagic.eth</p>
    </Col>
  </Row>
      </footer>
    </>
  )
}