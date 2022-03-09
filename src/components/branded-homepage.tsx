import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container";

export const BrandedHomepage = () => {

  //inside a column
  return (
    <>
      {/*<Container fluid>*/}
      <Row className={'section-homepage'}>
        <Col xs={0} sm={0}/>
        <Col className={'d-inline-block text-center'}>
          <span>
            <img
              alt=""
              src="/hyperion-logo2.svg"
              width="150"
              height="150"
              className="d-inline-block justify-content-center"
            />
            <br />
            <h1 className={'Header-title extra-large-logo d-inline-block justify-content-center'}> Hyperion</h1>
          </span>

        </Col>

        <Col xs={0} sm={0}/>

      </Row>
      <br/>
      <Row>
        <Col sm={0} md={1} lg={2} xl={2} xxl={2}/>
        <Col sm={12} md={5} lg={4} xl={4} xxl={4} className={'align-self-center'}>
          <p>
            Hyperion is a multidimensional exploration of complex movement in generative art, created entirely with
            code.

            It is inspired by the infinite resolution of motion— from atoms, to cells, to planetary maneuvers: every
            point in time is unique.

            Hyperion, too, captures this dynamic spectrum.
          </p>

          <p>
            Opening a portal to the next chapter of what NFTs are, this collection is being created infinitely before
            your eyes.

            Each NFT combines mathematical representations of shape, color, and movement vectors, that together create
            art of a completely unique nature.

            Collectors and viewers experience the NFT in motion, rendered in any resolution.
          </p>
        </Col>
        <Col sm={12} md={5} lg={5} xl={5} xxl={5}>
          <img
            alt=""
            src="/hyperion-collage-sm.png"
            width={'100%'}
            height={'auto'}
            className="d-inline-block justify-content-center"
          />
        </Col>
        <Col xs={1} sm={0} md={1} lg={1} xl={1} xxl={1}/>
      </Row>

      <br/>

      <Row>
        <Col/>
        <Col sm={11} md={10} lg={10} xl={10} xxl={10} className={'text-center'}>
          <hr/>
        </Col>
        <Col/>
      </Row>
      <Row>

        <Col sm={0} md={1} lg={1} xl={1} xxl={1}/>

        <Col sm={12} md={5} lg={5} xl={5} xxl={5}>

          <img
            alt=""
            src="/array-of-triangles.png"
            width={'100%'}
            height={'auto'}
            className="d-inline-block justify-content-center"
          />
        </Col>

        <Col sm={12} md={5} lg={4} xl={4} xxl={4} className={'text-left align-self-center'}>
          <br/><br/>
          <h3>
            Building a new generative art community, with perks
          </h3>
          <p className={'text-left'}>
            We're cultivating a community of artists, collectors and fans of Hyperion, and couldn't be more excited to
            be on Stargaze.


          </p>
          <p>
            Holders of Hyperion NFTs will gain early access to a new generative art platform being built by the team
            behind Hyperion.
          </p>
        </Col>
        <Col xs={1} sm={1} md={0} lg={2} xl={2} xxl={2}/>
      </Row>


      <Row>
        <Col/><Col sm={11} md={10} lg={10} xl={10} xxl={10} className={'text-center'}>
        <hr/>
      </Col><Col/>
      </Row>


      <Row>
        <Col/>


        <Col sm={12} md={5} lg={4} xl={4} xxl={4} className={'text-left align-self-center'}>
          <br/><br/>
          <h3>
            About the team
          </h3>
          <p className={'text-left'}>
            <a href={'https://twitter.com/stewbracken'}>skymagic.eth</a> is a generative artist, professional web3
            developer, and the creator of Hyperion.
          </p>
          <p className={'text-left'}>
            <a href={'https://twitter.com/ogcryptobeatz'}>nova</a> is a musician, web3 enthusiast, and advisor.
          </p>
          <p className={'text-left'}>
            <a href={'https://twitter.com/3CPyuki'}>3CPyuki</a> is an advisor.
          </p>

          {/*<p>*/}
          {/*  Collectors of Hyperion will gain early access to the generative art platform being built by the Hyperion*/}
          {/*  team.*/}
          {/*</p>*/}
        </Col>

        <Col/>
      </Row>


      {/*</Container>*/}
    </>
  )
}