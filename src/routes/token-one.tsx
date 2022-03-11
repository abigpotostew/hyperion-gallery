import { useEffect, useState } from "react";
import { useQueryParam } from "../hooks/useQueryParam";
import { useNumberTokens } from "../hooks/useNumberTokens";
import { Loader } from "../components/loader";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Header } from "../components/header";
import { TokenDetails } from "../components/token-details";
import Head from "next/head";
import { CenteredRowBootstrap } from "../components/centered-row-bs";

export default function TokenOne() {
  let [idQp, setIdQp] = useQueryParam('id');
  if (idQp === '...') {
    idQp = undefined;
  }
  const [tokenId, setTokenId] = useState<string | undefined>(undefined)
  const [notFound, setNotFound] = useState<boolean>(false);
  const { numTokens } = useNumberTokens()
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (numTokens === undefined || !idQp) {

      return
    }
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
          <Container>
            <Row>
              {!error && numTokens && tokenId && !loading && <TokenDetails tokenId={tokenId} numTokens={numTokens}/>}
              {!error && loading && <CenteredRowBootstrap><Loader/></CenteredRowBootstrap>}
              {error && <CenteredRowBootstrap>Error, please refresh page</CenteredRowBootstrap>}
            </Row>
          </Container>
        </Container>
      </main>
    </>
  );
}
