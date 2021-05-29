import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FooterComponent = () => (
  <>
  <Col md>
  <div>
    <h5>DevClust Technologies</h5>
  </div>
  </Col>
  <Col md>
  <div>
  <Link href="/"><a className="theme-color">Home</a></Link>
  </div>
  <div>
  <Link href="/contact-us"><a className="theme-color">Contact US</a></Link>
  </div>
  </Col>
  <Col md>
  <div>
    <small className="m-md-auto">Copyright © 2021 DevClust Technologies</small>
  </div>
  </Col>
  </>
)

function Footer() {
  const router = useRouter();

  return  (
    <div className="footer mt-5 border-top bg-light theme-color">
      <Container className="pt-3 pb-2 pl-3 pr-3">
        <Row className="">
          <FooterComponent />
        </Row>
      </Container>
    </div>
  )

}

export default Footer;
