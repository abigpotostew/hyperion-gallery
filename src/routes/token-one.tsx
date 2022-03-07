import { useEffect, useState } from "react";
import { Token } from "../components/token";
import { TokenFrame } from "../components/token-frame";
import { useQueryParam } from "../hooks/useQueryParam";
import { useNumberTokens } from "../hooks/useNumberTokens";
import { PageTitle } from "../components/page-title";
import { Loader } from "../components/loader";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Header } from "../components/header";
import { TokenDetails } from "../components/token-details";

export default function TokenOne() {
  let [idQp, setIdQp] = useQueryParam('id');
  const [tokenId, setTokenId] = useState<string|undefined>(undefined)
  const [notFound, setNotFound] = useState<boolean>(false);
  const {numTokens}= useNumberTokens()
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    if(!numTokens || !idQp) return;
    const id = parseInt(idQp);
    if(id > 0 && id <= numTokens) {
      setTokenId(id.toString());
    } else {
      setNotFound(true);
    }
    setLoading(false);
  },[idQp, numTokens])

  return (
    <>
      <Header />
    <main style={{ padding: "1rem 0" }}>
      <Container >
  {/*<PageTitle>Tokens</PageTitle>*/}
      {tokenId && !loading && <TokenDetails tokenId={tokenId} />}
      {loading && <Loader />}
      {/*<Container fluid>*/}
  {/*    {tokenId && !loading && <TokenFrame tokenId={tokenId}/>}*/}
  {/*      <Row>*/}

  {/*      < Col />*/}
  {/*      <Col>*/}
  {/*    {tokenId && !loading && <Token tokenId={tokenId}/>}*/}
  {/*    {!tokenId && !loading && <p>Not Found</p>}*/}
  {/*    {loading && <Loader />}*/}
  {/*      </Col>*/}
  {/*    < Col />*/}
  {/*      </Row>*/}
      </Container>
  </main>
    </>
);
}
