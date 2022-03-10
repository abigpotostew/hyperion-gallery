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
  const {numTokens}= useNumberTokens()
  const [keplrError, setKeplrError] = useState<boolean>(false)
  
  const onConnectKeplr = async ()=>{
    if (!queryClient ) {
      return;
    }
    try{

      keplrError&&setKeplrError(false)
    await queryClient.connectKeplr()
    const accounts = await queryClient.getAccounts()
    if(accounts.length>0){
      window.location.href = '/share?account='+accounts[0].address
      // setAccountQueryParam(accounts[0].address)
    }
    }catch(e){
      console.log(e)
      setKeplrError(true)
    }
  }


  return (
    <Container >
      <Row>
        <Col xs={6} xxl={1}>
          <Button variant="outline-secondary" onClick={onConnectKeplr} disabled={numTokens===0||numTokens===undefined}>Connect Keplr</Button>
          {(numTokens===0||numTokens===undefined) && <p>Disabled until Mint Day.</p>}
          {keplrError && <p>Error connecting to Keplr. Is Keplr installed?</p>}
        </Col>
      </Row>
    </Container>
  )
}
