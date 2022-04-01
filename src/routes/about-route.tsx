import { Wallet } from "../components/wallet";
import { Header } from "../components/header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../components/page-title";
import Head  from "next/head";
import { Footer } from "../components/footer";
import React from "react";
import config from "../config";

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
              </div>
              <hr/>
              <div>
                  <b>FAQs:</b>
                  <ul>
                    <li>
                      <b>Contract</b>: stars18a0pvw326fydfdat5tzyf4t8lhz0v6fyfaujpeg07fwqkygcxejsnp5fac
                    </li>
                    <li>
                      <b>Where to buy</b>: Hyperion minting is complete. NFTs will be available on the Stargaze Marketplace when that launches.
                    </li>
                    <li>
                      <b>Mint Price</b>: {config.mintPriceStars} $STARS
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
                      <b>License</b>: <a href={'https://creativecommons.org/licenses/by/4.0/'}>Creative Commons Attribution 4.0 International (CC BY 4.0)</a>
                      <p>
                        You are free to:
                        <ul>
                          <li>
                            Share — copy and redistribute the material in any medium or format    
                          </li>
                        <li>
                          Adapt — remix, transform, and build upon the material
                          for any purpose, even commercially.  
                        </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <b>Minimum requirements</b>: Live view works best on Chrome on a desktop or laptop computer with a dedicated graphics card. Tested on Intel MacBook Pro with AMD GPU and Windows 11 with Intel Iris. Note the original immutable Hyperion stored on IPFS has a bug such that a small subset of tokens do not render on Windows 10 and Apple M1 computers. This issue is fixed when viewing on this website.  
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
                    <li>✅ <b>March 11</b>: Mint Day! Sold out</li>
                    <li>✅ <b>March/April</b>: Build in HTML NFT support into Stargaze platform. That means your existing Hyperion NFTs will
                      render the Live view in the marketplace. See <a href={'https://app.stargaze.zone/media/stars18a0pvw326fydfdat5tzyf4t8lhz0v6fyfaujpeg07fwqkygcxejsnp5fac/1'}>stargaze.zone</a>
                    </li>
                    <li><b>March/April/May</b>: Build an artblocks style platform for Stargaze.</li>
                    <li><b>∞</b>: Make more art :)</li>
                  </ul>
                </p>
              </div>
              <hr/>
              <div>
                <p>
                <b>Team: </b>
                  <ul>
                    <li>
                      Stewart Bracken aka <a href={'https://twitter.com/stewbracken'}>skymagic.eth</a> - <a href={'https://stewart.codes/about/'}>https://stewart.codes/about/</a>
                    </li>
                    <li>
                      <a href={'https://twitter.com/ogcryptobeatz'}>nova</a>
                    </li>
                    <li>
                      <a href={'https://twitter.com/3CPyuki'}>3CPyuki</a>
                    </li>
                  </ul>
                
                </p>
              </div>
            </Col>
            <Col/>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
