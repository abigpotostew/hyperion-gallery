import { useEffect, useState } from "react";
import { Token } from "../components/token";
import { TokenFrame } from "../components/token-frame";

export default function TokenOne() {
  const [tokenId, setTokenId] = useState<string>('')
  useEffect(()=>{
    const query = new URLSearchParams(window.location.search)
   if(query.get('token')){
      const tokenId = parseInt(query.get('token')||'0')
      if(tokenId>0&&tokenId<=1024){
        setTokenId(tokenId.toString())
      }
    }
  },[])

  return (
    <main style={{ padding: "1rem 0" }}>
  <h2>Tokens</h2>
      {tokenId && <TokenFrame tokenId={tokenId}/>}
      {tokenId && <Token tokenId={tokenId}/>}
  </main>
);
}
