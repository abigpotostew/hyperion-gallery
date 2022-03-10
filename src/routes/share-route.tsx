import { Wallet } from "../components/wallet";
import { Header } from "../components/header";
import Container from "react-bootstrap/Container";
import { PageTitle } from "../components/page-title";
import Head from "next/head";
import { Share } from "../components/share";
import { useQueryParam } from "../hooks/useQueryParam";
import { Footer } from "../components/footer";
import React from "react";
import { formatAccount } from "../utils/account-format";

export default function ShareRoute() {
  let [accountQueryParam, setAccountQueryParam] = useQueryParam('account');
  if(accountQueryParam==='...'){
    accountQueryParam = undefined;
  }
  const prettyAccount = formatAccount(accountQueryParam);
  return (
    <>
      <Head>
        <title>Check out my Hyperion NFTs</title>
      </Head>
      <Header />
      <main style={{ padding: "1rem 0" }}>
        <Container>
          {/*<Row>*/}

          {/*</Row>*/}
          {/*<Row>*/}
          <PageTitle>NFTs owned by {prettyAccount}</PageTitle>
          {accountQueryParam!==undefined && <Share account={accountQueryParam} />}
          {accountQueryParam===undefined && <p>Oops something went wrong.</p>}
          {/*</Row>*/}
          {/*</Row>*/}
        </Container>
      </main>
      <Footer />
    </>
  );
}
