import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { Gallery } from "./gallery";
import { useQueryContract } from "../hooks/useQueryContract";
import { Button, Col, Row } from "react-bootstrap";
import { useQueryParam } from "../hooks/useQueryParam";
import { copyTextToClipboard } from "../utils/clipboard";
import { Clipboard } from "./clipboard";
import { useNumberTokens } from "../hooks/useNumberTokens";

export const Wallet = () => {
  const { queryClient } = useQueryContract()
  const [tokenIds, setTokenIds] = useState<string[]>([]);
  const [clipboardClasses,setClipboardClasses] = useState<string>('hidden');
  let [accountQueryParam, setAccountQueryParam] = useQueryParam('account');
  
  const {numTokens}= useNumberTokens()

  useEffect(() => {
    if (!queryClient || !accountQueryParam) {
      return;
    }

    (async () => {
      let account = accountQueryParam;
      // setAccountQueryParam(account);
      console.log(account)
      // const balance = await queryClient.getBalance(account);
      // console.log(account, 'account balance:', balance);

      const ownedTokens = await queryClient.getAllOwnedTokens(account)
      console.log(account, 'owned tokens:', ownedTokens);
      setTokenIds(ownedTokens)

    })()
  }, [queryClient, accountQueryParam])

  const onConnectKeplr = async ()=>{
    if (!queryClient ) {
      return;
    }
    await queryClient.connectKeplr()
    const accounts = await queryClient.getAccounts()
    if(accounts.length>0){
      setAccountQueryParam(accounts[0].address)
    }
  }

  const onShare = async ()=>{
    copyTextToClipboard(window.location.href)
    setClipboardClasses('visible')
    setTimeout(()=>{
      setClipboardClasses('hidden')
    },2000)
  }

  return (
    <Container >
      <Row>
        <Col xs={6} xxl={1}>
          {!accountQueryParam?<Button variant="outline-secondary" onClick={onConnectKeplr} disabled={numTokens===0||numTokens===undefined}>Connect Keplr</Button>:null}
          {(numTokens===0||numTokens===undefined) && <p>Disabled until Mint Day.</p>}
          {accountQueryParam?<Button variant="primary" onClick={onShare}>Share</Button>:null}
          <Clipboard width={32} classes={clipboardClasses} />
        </Col>
      </Row>
      <Row>
      <Gallery tokenIds={tokenIds}/>
      </Row>
    </Container>
  )
}
