import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function FeaturedList(props) {
  
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Header>{props.services.fields.header}</Card.Header>
      <ListGroup variant="flush">
      {props.services.fields.service.map(item => <ListGroup.Item key={item}>{item}</ListGroup.Item>)}
      </ListGroup>
    </Card>
  )
}

export default FeaturedList
