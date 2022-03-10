import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { Gallery } from "./gallery";
import { useQueryContract } from "../hooks/useQueryContract";
import { Button, Col, Row } from "react-bootstrap";
import { useQueryParam } from "../hooks/useQueryParam";
import { copyTextToClipboard } from "../utils/clipboard";
import { Clipboard } from "./clipboard";
import { useNumberTokens } from "../hooks/useNumberTokens";
import { Loader } from "./loader";

export const Share = ({account}:{account:string}) => {
  const { queryClient } = useQueryContract()
  const [tokenIds, setTokenIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const {numTokens}= useNumberTokens()
  const [clipboardClasses,setClipboardClasses] = useState<string>('hidden');
  let [accountQueryParam, setAccountQueryParam] = useQueryParam('account');
  if(accountQueryParam==='...'){
    accountQueryParam = undefined;
  }
  
  const onShare = async ()=>{
    copyTextToClipboard(window.location.href)
    setClipboardClasses('visible')
    setTimeout(()=>{
      setClipboardClasses('hidden')
    },2000)
  }

  useEffect(() => {
    if (!queryClient ) {
      return;
    }

    (async () => {
      // setAccountQueryParam(account);
      console.log(account)
      // const balance = await queryClient.getBalance(account);
      // console.log(account, 'account balance:', balance);

      const ownedTokens = await queryClient.getAllOwnedTokens(account)
      setTokenIds(ownedTokens)
      setLoading(false)
    
    })()
  }, [queryClient,account])

  return (
    <Container >
      <Row>
        <Col xs={6} xxl={1}>
          {loading && <><p>Loading...</p><Loader /></>}
          {!loading && (accountQueryParam?<Button variant="primary" onClick={onShare}>Share Gallery</Button>:null)}
          <Clipboard width={32} classes={clipboardClasses} />
        </Col>
      </Row>
      <Row>
      <Gallery tokenIds={tokenIds}/>
        {!loading && tokenIds.length===0 &&<p>This account doesn't own any Hyperion tokens.</p>}
      </Row>
    </Container>
  )
}
