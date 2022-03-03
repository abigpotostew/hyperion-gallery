import { Card, Col } from "react-bootstrap";

export const Token = ({tokenId}:{tokenId:string})=>{

  const imageUrl= `https://ipfs.io/ipfs/bafybeigrbiuatbqgeatfhfik6lzu6v4etqevrpvlp4d5rzl5salrhyso54/${tokenId}.jpg`;
  const imageUrl4k= `https://ipfs.io/ipfs/bafybeigrbiuatbqgeatfhfik6lzu6v4etqevrpvlp4d5rzl5salrhyso54/${tokenId}.png`;
  return (
          <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>Hyperion #{tokenId}</Card.Title>
              <Card.Text>
                <a href={imageUrl4k} >4k Render</a>
              </Card.Text>
            </Card.Body>
          </Card>

  )
}
