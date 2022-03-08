import { Col, Container, Pagination, Row } from "react-bootstrap";
import { TokenFrame } from "./token-frame";
import { PageTitle } from "./page-title";
import { TokenTraits } from "./token-traits";

export const TokenDetails = ({tokenId,numTokens}:{tokenId: string;numTokens:number}) => {

  const backPage=()=>{
    const page = parseInt(tokenId);
    if(page===1) return;
    window.location.href = '/token?id='+(page-1);
  }
  const forwardPage=()=>{
    const page = parseInt(tokenId);
    if(page===numTokens) return;
    window.location.href = '/token?id='+(page+1);
  }

  return (
    <Container  >
      <Row>
        <Col/>
        <Col xs={12} md={7} lg={6}>
          <div>
          <PageTitle >#{tokenId}</PageTitle>
          </div>
          <div>
          <Pagination>
            <Pagination.Prev disabled={(tokenId==='1')} onClick={() => backPage()}/>
            <Pagination.Next disabled={(tokenId===numTokens.toString())} onClick={() => forwardPage()}/>
          </Pagination>
          </div>
          <div>
        <TokenFrame minHeight={525} tokenId={tokenId}/>
          </div>
        </Col>

        <Col/>
      </Row>
      <Row>

        <Col/>
        <Col sm={12} md={8} lg={5}>
<hr />
          <TokenTraits tokenId={tokenId} />
        </Col>

        <Col/>
      </Row>
    </Container>

  );
};
