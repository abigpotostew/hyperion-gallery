import { useEffect, useState } from "react";
import { TokenFrame } from "./token-frame";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Loader } from "./loader";
import { useNumberTokens } from "../hooks/useNumberTokens";
import useBreakpoint, { lteBreakpoint } from "../hooks/useBreakpoint";

export const RandomToken = () => {
  const {numTokens}= useNumberTokens()

  const [tokenId, setTokenId] = useState<string>("0");

  const bp =  useBreakpoint()
  const size =(!bp?275: lteBreakpoint(bp, 'sm')?275:525)* 0.8

  useEffect(() => {
    if (numTokens===undefined) return;

    (async () => {
      if (numTokens === 0) {
        setTokenId("1")
      } else {
        setTokenId((Math.floor(Math.random() * numTokens) + 1).toString())
      }
    })()
  }, [numTokens])

  return (
    <Container fluid>

      {tokenId === '0' ? <div style={{height:525}}> <Loader /></div> : (
          <Row>
            <Col/>
            <Col xs={12} md={7} lg={6}>
              <TokenFrame tokenId={tokenId} minHeight={size}/>
              <h6 className={'text-center'}>Showing token #{tokenId}</h6>
            </Col>
            <Col/>
          </Row>
        )}
    </Container>
  )
}
