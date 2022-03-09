import { Wallet } from "../components/wallet";
import { Header } from "../components/header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../components/page-title";
import Head  from "next/head";

export default function AboutRoute() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header/>
      <main style={{ padding: "1rem 0" }}>
        <Container>


          <Row>
            <Col/>
            <Col xs={10} md={8}>

              <PageTitle>About</PageTitle>
              <div>
                {/*<p>Hyperion is a multidimensional exploration of complex movement in generative art, created entirely*/}
                {/*  with code. It is inspired by the infinite resolution of movement— from atoms, to cells, to planetary*/}
                {/*  maneuvers: every point in time is unique. Hyperion, too, captures spectrums of texture and color with*/}
                {/*  mathematical precision rendered in real time. Collectors and viewers experience the NFT in motion,*/}
                {/*  rendered in any resolution.</p>*/}
                <p>Hyperion is a collection of 1024 unique NFTs each containing a 4K image render and a ‘live view’ real
                  time WebGL animation.</p>
                <p><a href={'https://stewart.codes/static/hyperion-demo/'}>Live Demo</a></p>
              </div>
              <hr/>
              <div>
                  <b>FAQs:</b>
                  <ul>
                    <li>
                      <b>Mint Price</b>: 350 $STARS
                    </li>
                    <li>
                      <b>Mint Date</b>: March 11, 2022 around 4pm EST
                    </li>
                    <li>
                      <b>Total Supply</b>: 1024
                    </li>
                    <li>
                      <b>Utility</b>: Early entry to my upcoming generative art platform on Stargaze.
                    </li>
                    <li>
                      <b>License</b>: <a href={'https://creativecommons.org/licenses/by/4.0/'}>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>
                    </li>
                    <li>
                      <b>Minimum requirements</b>: Live view works best on Chrome on a desktop or laptop computer with a dedicated graphics card.
                    </li>
                    <li>
                      10% of mint proceeds will be donated to Alameda County Food Bank and Youth Spirit Artworks.
                    </li>
                      
                  </ul>
              </div>
              <hr/>
              <div>
                <p>
                  <b>Roadmap:</b>
                  <ul>
                    <li>March 11: Mint Day!</li>
                    <li>Build in HTML NFT support into Stargaze platform. That means your existing Hyperion NFTs will
                      render the Live view in the marketplace.
                    </li>
                    <li>Build an artblocks style platform for Stargaze.</li>
                    <li>Make more art :)</li>
                  </ul>
                </p>
              </div>
              <hr/>
              <div>
                <p>
                <b>Team: </b>
                Stewart Bracken - <a href={'https://stewart.codes/about/'}>https://stewart.codes/about/</a>
                </p>
              </div>
            </Col>
            <Col/>
          </Row>
        </Container>
      </main>
    </>
  );
}
