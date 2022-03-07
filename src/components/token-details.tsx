import { Col, Container, Row } from "react-bootstrap";
import { TokenFrame } from "./token-frame";
import { PageTitle } from "./page-title";
import { tokenDetails } from "./token";
import { TokenTraits } from "./token-traits";

export const TokenDetails = ({tokenId}:{tokenId: string}) => {


  return (
    <Container  >
      <Row>
        <Col/>
        <Col xs={12} md={7} lg={6}>
          <PageTitle >#{tokenId}</PageTitle>
        <TokenFrame minHeight={525} tokenId={tokenId}/>
        </Col>

        <Col/>
      </Row>
      <Row>

        <Col/>
        <Col sm={12} md={8} lg={5}>
          <br />
          <br />
          <br />
          <TokenTraits tokenId={tokenId} />
        </Col>

        <Col/>
      </Row>
    </Container>

  );
};
