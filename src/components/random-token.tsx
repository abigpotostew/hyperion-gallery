import { useEffect, useState } from "react";
import { TokenFrame } from "./token-frame";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Loader } from "./loader";
import { useNumberTokens } from "../hooks/useNumberTokens";
import useBreakpoint, { lteBreakpoint } from "../hooks/useBreakpoint";

const getRandomTokenId = (numTokens: number) => {
  if (numTokens === 0) {
    return '1';
  }
  return (Math.floor(Math.random() * numTokens) + 1).toString()
};

export const RandomToken = () => {
  const { numTokens } = useNumberTokens()

  const [tokenId, setTokenId] = useState<string>("0");

  const bp = useBreakpoint()
  const size = (!bp ? 275 : lteBreakpoint(bp, 'sm') ? 275 : 525) * 0.8


  useEffect(() => {
    if (numTokens === undefined) return;

    (async () => {
      setTokenId(getRandomTokenId(numTokens));
    })()
  }, [numTokens])

  const randomizeToken = () => {
    if (numTokens === undefined) return;
    setTokenId(getRandomTokenId(numTokens));
  }

  return (
    <Container fluid>

      {tokenId === '0' ? <div style={{ height: 525 }}><Loader/></div> : (<>
        <Row>
          <Col/>
          <Col xs={12} md={7} lg={6}>
            <TokenFrame tokenId={tokenId} minHeight={size}/>
          </Col>
          <Col/>
        </Row>
        <Row>
          <Col/>
          <Col xs={12} md={7} lg={6} className={'text-center'} style={{ paddingTop: '20px' }}>
            <div className={'d-inline-block'} style={{ width: '175px', paddingRight:'0' }}>Showing token #{tokenId}</div>
            <div className={'d-inline hover-blue shuffle-btn '} onClick={randomizeToken}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
             className="bi bi-shuffle" viewBox="0 0 16 16">
        <path fillRule="evenodd"
              d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
        <path
          d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
        </svg>

        </div>
          </Col>
          <Col/>
        </Row>
      </> )}
    </Container>
  )
}
