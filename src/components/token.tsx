import Link from "next/link";
import { Card } from "react-bootstrap";

export const tokenDetails = (tokenId:string)=>{
  return {
    live: `https://live.hyperionnft.art/id/${tokenId}/`,
    imageUrl: `https://ipfs.io/ipfs/bafybeiaqkwid7mhfocnrizk3rfwqjm6o2s2o6teewoyite3upmifqdjrye/${tokenId}.jpg`,
    imageUrl4k: `https://ipfs.io/ipfs/bafybeiaqkwid7mhfocnrizk3rfwqjm6o2s2o6teewoyite3upmifqdjrye/${tokenId}.png`,
    thumbnail: `https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-300/${tokenId}.jpg`,
    metadata: `https://ipfs.io/ipfs/bafybeiayug33vfrduvccjagfekrqp3qijru5qxtkb5q3gttkgd3uum4gxa/${tokenId}`,
  }
}

export const Token = ({tokenId}:{tokenId:string})=>{

  const token = tokenDetails(tokenId);

  return (
    <Card className="text-center" border="light">
      <Card.Img variant="top" src={token.thumbnail} />
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
