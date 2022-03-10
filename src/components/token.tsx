import Link from "next/link";
import { Card } from "react-bootstrap";

export const tokenDetails = (tokenId:string)=>{
  return {
    live: `https://live.hyperionnft.art/id/${tokenId}/`,
    imageUrl: `https://ipfs.io/ipfs/bafybeigqwoubjsr3jmxby6kjktqu3siob5fe5s5hdjwirxf3q4czmfhs3y/${tokenId}.jpg`,
    imageUrl4k: `https://ipfs.io/ipfs/bafybeigqwoubjsr3jmxby6kjktqu3siob5fe5s5hdjwirxf3q4czmfhs3y/${tokenId}.png`,
    thumbnail: `https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-300/${tokenId}.jpg`,
    thumbnail400: `https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-400/${tokenId}.jpg`,
    metadata: `https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/metadata/${tokenId}.json`,
    // metadata: `https://ipfs.io/ipfs/bafybeidnj2urojetktrmsw63gc55tu2vrrgyqiz4niyhqr2vpvex5bvy74/${tokenId}`,
  }
}

export const Token = ({tokenId}:{tokenId:string})=>{

  const token = tokenDetails(tokenId);

  return (
    <Card className="text-center" border="light">
      <Link href={`/token/` } as={`/token/?id=${encodeURIComponent(tokenId)}`}>
        <a><Card.Img variant="top" src={token.thumbnail400} /></a>
      </Link>
      <Card.Body>
        <Card.Title>#{tokenId}</Card.Title>
        <Card.Text>
          <Link href={`/token/` } as={`/token/?id=${encodeURIComponent(tokenId)}`}>
            <a className={'Token-link'}>Details</a>
          </Link> |{" "}
          <a href={token.imageUrl4k} className={'Token-link'}>Image</a> |{" "}
          <a href={token.live} className={'Token-link'}>Live</a>
        </Card.Text>
      </Card.Body>
    </Card>

  )
}
