import { useEffect, useState } from "react";
import { TokenFrame } from "./token-frame";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Loader } from "./loader";
import { useNumberTokens } from "../hooks/useNumberTokens";

export const RandomToken = () => {
  const {numTokens}= useNumberTokens()

  const [tokenId, setTokenId] = useState<string>("0");

  useEffect(() => {
    if (numTokens===undefined) return;

    (async () => {
      const num = numTokens

      if (num === 0) {
        setTokenId("1")
      } else {
        setTokenId((Math.floor(Math.random() * num) + 1).toString())
      }
    })()
  }, [numTokens])

  return (
    <Container fluid>

      {tokenId === '0' ? <div style={{height:525}}> <Loader /></div> : (
          <Row>
            <Col/>
            <Col xs={12} md={7} lg={6}>
              <TokenFrame tokenId={tokenId}/>
              <h6>Showing token {tokenId} of {numTokens}</h6>
            </Col>
            <Col/>
          </Row>
        )}
    </Container>
  )
}
