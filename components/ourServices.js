import CardTile from './cardTile';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function OurServices(props) {

  return(
    <>
    <Container>
      <h3 className="text-center orange-text">Our Services</h3>
    </Container>
    <Row>
    {props.content.map(item => {
      return (
        <div className="col-md-4" key={item.fields.title}>
          <CardTile service={item} />
        </div>
      )
    })}
    </Row>
    </>
  )
}

export default OurServices
