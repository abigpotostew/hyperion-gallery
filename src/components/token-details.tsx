import { Col, Container, Pagination, Row } from "react-bootstrap";
import { TokenFrame } from "./token-frame";
import { PageTitle } from "./page-title";
import { TokenTraits } from "./token-traits";
import useBreakpoint, { lteBreakpoint } from "../hooks/useBreakpoint";
import { tokenDetails } from "./token";

export const TokenDetails = ({ tokenId, numTokens }: { tokenId: string; numTokens: number }) => {
  const token = tokenDetails(tokenId);
  const backPage = () => {
    const page = parseInt(tokenId);
    if (page === 1) return;
    window.location.href = '/token?id=' + (page - 1);
  }
  const forwardPage = () => {
    const page = parseInt(tokenId);
    if (page === numTokens) return;
    window.location.href = '/token?id=' + (page + 1);
  }

  const bp = useBreakpoint()
  const size = lteBreakpoint(bp, 'sm') ? 275 : 525
  return (

    <>
      <Col/>
      <Col xs={12} md={7} lg={6}>
        <div>
          <PageTitle>#{tokenId}</PageTitle>
        </div>
        <div>
          <Pagination>
            <Pagination.Prev disabled={(tokenId === '1')} onClick={() => backPage()}/>
            <Pagination.Next disabled={(tokenId === numTokens.toString())} onClick={() => forwardPage()}/>
          </Pagination>
        </div>
        <div>
          <TokenFrame minHeight={size} tokenId={tokenId}/>
        </div>
        <div className={'text-center'}>
          <a href={token.imageUrl4k} download={true}>
            Download 4K Render
          </a> |{" "}
          <a href={token.live} rel="noreferrer">Live</a>
        </div>
      </Col>

      <Col/>
    
      <Row>

        <Col/>
        <Col sm={12} md={8} lg={5}>
          <hr/>
          <TokenTraits tokenId={tokenId}/>
        </Col>

        <Col/>
      </Row>
    </>


  )

};
