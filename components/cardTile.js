import Card from 'react-bootstrap/Card'

function CardTile(props) {

  return(
    <Card className="card-tile orange-shadow mt-4">
    <Card.Body>
      <Card.Title>{props.service.fields.title}</Card.Title>
      <Card.Text>
        {props.service.fields.description}
      </Card.Text>
    </Card.Body>
    </Card>
  )
}

export default CardTile;
