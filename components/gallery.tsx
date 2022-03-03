import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Token } from "./token";
function splitArrayIntoChunksOfLen(arr, len) {
  var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
export const Gallery = ({ tokenIds }: { tokenIds: string[] }) => {

  const chunks = splitArrayIntoChunksOfLen(tokenIds, 3);
  return (
    <Container >
      {chunks.map((chunk, index) => (
        <Row  key={index}>
          {chunk.map((tokenId:string) => (
            <Col xs={12} md={12} lg={4} key={tokenId}>
              <Token tokenId={tokenId} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}
