import { Wallet } from "../components/wallet";
import { Header } from "../components/header";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { PageTitle } from "../components/page-title";

export default function WalletRoute() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem 0" }}>
        <Container>
          {/*<Row>*/}

          {/*</Row>*/}
          {/*<Row>*/}
          <PageTitle>My NFTs</PageTitle>
          <Wallet />
          {/*</Row>*/}
        </Container>
      </main>
    </>
  );
}