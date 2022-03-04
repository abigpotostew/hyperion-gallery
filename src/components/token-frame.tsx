import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

export const TokenFrame = ({tokenId}:{tokenId:string})=>{
  return (

    <Container >
      <Row>
        <Col />
    <Col sm={12} md={8} lg={5}>
      <iframe allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"} allowFullScreen frameBorder={"0"}
              height={"100%"} sandbox={"allow-scripts"} src={`https://hyperion.stewart.codes/gen/${tokenId}/`} width={"100%"}
              style={{ "minHeight": 525  }}></iframe>
    </Col>
        <Col />
      </Row>

    </Container>
  )
}
