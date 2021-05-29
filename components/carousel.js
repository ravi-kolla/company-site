import Carousel from 'react-bootstrap/Carousel'



function CarouselComponent(props) {

  return(
    <Carousel>
    {props.content.map(item => {
      return (
        <Carousel.Item key={item.sys.id}>
          <img
            className="d-block w-100"
            src={item.fields.backgroundImage.fields.file.url}
            alt={item.fields.backgroundImage.fields.title}
          />
          <Carousel.Caption>
            <h3>{item.fields.header}</h3>
            <p>{item.fields.subHeader}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })}
    </Carousel>
  )
}

export default CarouselComponent;
