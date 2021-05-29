import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function FeaturedList(props) {
  console.log(props.content);
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Header>{props.content.fields.header}</Card.Header>
      <ListGroup variant="flush">
      {props.content.fields.service.map(item => <ListGroup.Item key={item}>{item}</ListGroup.Item>)}
      </ListGroup>
    </Card>
  )
}

export default FeaturedList
