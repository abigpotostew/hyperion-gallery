import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Token } from "./token";
import './gallery.css';

function splitArrayIntoChunksOfLen(arr:any[], len:number) {
  var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
export const Gallery = ({ tokenIds }: { tokenIds: string[] }) => {

  return (
<>
          {tokenIds.map((tokenId:string) => (
            <Col xs={12} md={3} lg={3} key={tokenId} className={'Gallery-item'}>
              <Token tokenId={tokenId} />
            </Col>
          ))}
</>
    // <Container >
    //   {chunks.map((chunk, index) => (
    //     <Row  key={index}>
    //       {chunk.map((tokenId:string) => (
    //         <Col xs={12} md={6} lg={4} key={tokenId}>
    //           <Token tokenId={tokenId} />
    //         </Col>
    //       ))}
    //     </Row>
    //   ))}
    // </Container>
  )
}
