import CardTile from './cardTile';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function OurServices(props) {

  return(
    <>
    <Container>
      <h3 className="text-center orange-text">Our Services</h3>
    </Container>
    <Row sm={1} md={3}>
    {props.content.map(item => {
      return (
        <Col>
          <CardTile service={item} />
        </Col>
      )
    })}
    </Row>
    </>
  )
}

export default OurServices
