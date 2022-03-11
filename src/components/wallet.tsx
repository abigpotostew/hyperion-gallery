import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useQueryContract } from "../hooks/useQueryContract";
import { Button, Col, Row } from "react-bootstrap";
import { useNumberTokens } from "../hooks/useNumberTokens";

export const Wallet = () => {
  const { queryClient } = useQueryContract()
  const { numTokens } = useNumberTokens()
  const [keplrError, setKeplrError] = useState<boolean>(false)

  const onConnectKeplr = async () => {
    if (!queryClient) {
      return;
    }
    try {
      keplrError && setKeplrError(false)
      await queryClient.connectKeplr()
      const accounts = await queryClient.getAccounts()
      if (accounts.length > 0) {
        window.location.href = '/share?account=' + accounts[0].address
      }
    } catch (e) {
      console.log(e)
      setKeplrError(true)
    }
  }


  return (
    <Container>
      <Row>
        <Col xs={6} xxl={1}>
          <Button variant="outline-primary" onClick={onConnectKeplr}
                  disabled={numTokens === 0 || numTokens === undefined} style={{width:'150px'}}>Connect Keplr</Button>
          {keplrError && <p>Error connecting to Keplr. Is Keplr installed?</p>}
        </Col>
      </Row>
    </Container>
  )
}
