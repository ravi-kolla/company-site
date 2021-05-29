import Card from 'react-bootstrap/Card'

function FeaturedOffer(props) {

  return(
    <Card>
      <Card.Header>{props.content.fields.header}</Card.Header>
      <Card.Body>
        <Card.Title>{props.content.fields.title}</Card.Title>
        <Card.Text>{props.content.fields.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FeaturedOffer
