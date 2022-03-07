import { Wallet } from "../components/wallet";
import { Header } from "../components/header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../components/page-title";

export default function AboutRoute() {
  return (
    <>
      <Header/>
      <main style={{ padding: "1rem 0" }}>
        <Container>


          <Row>
            <Col/>
            <Col xs={10} md={8}>

              <PageTitle>About</PageTitle>
              <div>
                <p>Hyperion is a multidimensional exploration of complex movement in generative art, created entirely
                  with code. It is inspired by the infinite resolution of movement— from atoms, to cells, to planetary
                  maneuvers: every point in time is unique. Hyperion, too, captures spectrums of texture and color with
                  mathematical precision rendered in real time. Collectors and viewers experience the NFT in motion,
                  rendered in any resolution.</p>
                <p>10% of mint proceeds will be donated to Alameda County Food Bank and Youth Spirit Artworks.</p>
                <p>Hyperion is a collection of 1024 unique NFTs each containing a 4K image render and a ‘live view’ real
                  time WebGL animation.</p>
                <p><a href={'https://stewart.codes/static/hyperion-demo/'}>Live Demo</a></p>
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
                Stewart Bracken
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
