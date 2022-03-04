import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Gallery } from "./gallery";

export const Wallet = () => {
  const [tokenIds, setTokenIds] = useState<string[]>([]);
  useEffect(() => {
    //

    const animationUrl = 'https://ipfs.io/ipfs/bafybeif6urhfyqg546radpos4spy45rwv2rxzndhqxqvbhuyl3ui7hvwxm/%TOKEN_ID%';
    const imageUrl= 'ipfs://bafybeigrbiuatbqgeatfhfik6lzu6v4etqevrpvlp4d5rzl5salrhyso54/%TOKEN_ID%.jpg';

    (async ()=>{
// const acc1='stars1524hf3dmcl8lagnfhuct4k2002pv73yswnl9cf'
      const acc2='stars1euu359d2cwe46j8a8fqkmcrhzjq6j642htt7rn'
      const client = await CosmWasmClient.connect('https://rpc.big-bang-1.stargaze-apis.com/');
      const sg721 = 'stars1msfmkx4xmts3el3r46c2u2eehxkhahqzsa0crn0v58cncp7ztr7qrshkkh';



      let account =acc2;
      console.log(account)
      const balance = await client.getBalance(account, 'ustars');
      console.log(account,'account balance:', balance);

      const ownedTokens = await client.queryContractSmart(sg721,{ tokens: { owner:account }});
      console.log(account, 'owned tokens:', ownedTokens.tokens);
      const arr = ownedTokens.tokens as string[];
      setTokenIds(arr)
      // if(!arr){
      //   console.log(account, 'no tokens owned');
      //   continue;
      // }
      // const tokens = [];
      // let i=0;
      // for (let tokenId of arr) {
      //   const info = await client.queryContractSmart(sg721, { nft_info: { token_id: tokenId } })
      //   console.log('tokenId', info.token_uri)
      //   tokens[i++]= { token_id:tokenId , token_uri:info.token_uri as string }
      // }
      // for (let tokenInfo of tokens) {
      //   const metadata = tokenInfo.token_uri.replace('ipfs://','https://ipfs.io/ipfs/')
      //   const metadataRes = await axios.get(metadata);
      //   const url = metadataRes.data.animation_url;
      //   console.log(tokenInfo.token_id, 'animation_url', url)
      // }



      //stars1euu359d2cwe46j8a8fqkmcrhzjq6j642htt7rn
      //stars1524hf3dmcl8lagnfhuct4k2002pv73yswnl9cf
      // console.log(acc1, await client.getAllBalances('stars1524hf3dmcl8lagnfhuct4k2002pv73yswnl9cf'))
      // console.log(acc2,await client.getAllBalances(acc2))
      // client.
      // client.getAccount('stars1euu359d2cwe46j8a8fqkmcrhzjq6j642htt7rn').then(accounts => {
      //   console.log(accounts);
      // });
    })()

  },[])
  return (
    <Container >
      <Gallery tokenIds={tokenIds}/>
    </Container>
  )
}
