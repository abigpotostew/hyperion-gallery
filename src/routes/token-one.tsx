import { useEffect, useState } from "react";
import { Token } from "../components/token";
import { useQueryParam } from "../hooks/useQueryParam";
import { useNumberTokens } from "../hooks/useNumberTokens";
import { PageTitle } from "../components/page-title";
import { Loader } from "../components/loader";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Header } from "../components/header";
import { TokenDetails } from "../components/token-details";
import Head from "next/head";

export default function TokenOne() {
  let [idQp, setIdQp] = useQueryParam('id');
  const [tokenId, setTokenId] = useState<string | undefined>(undefined)
  const [notFound, setNotFound] = useState<boolean>(false);
  const { numTokens } = useNumberTokens()
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (numTokens===undefined || !idQp) return;
    const id = parseInt(idQp);
    if (id > 0 && id <= numTokens) {
      setTokenId(id.toString());
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [idQp, numTokens])

  return (
    <>
      <Head>
        <title>#{tokenId}</title>
      </Head>
      <Header/>
      <main style={{ padding: "1rem 0" }}>
        <Container>
          {/*<PageTitle>Tokens</PageTitle>*/}
          {numTokens && tokenId && !loading && <TokenDetails tokenId={tokenId} numTokens={numTokens}/>}
          {loading && <Loader/>}
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