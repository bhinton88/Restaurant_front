import Card from 'react-bootstrap/Card';

function LastFiveCard ({ dish }) {

  return (
    <Card style= {{ width: '18rem'}}>
      <Card.Img variant="top" src={dish.image} className="dishImages" />
      <Card.Body>
        <Card.Title>{dish.dish_name}</Card.Title>
        <Card.Text>
            <em>Associated Restaurant:</em> {dish.restaurant.name}
            <br/>
            <br/>
            <em>Description:</em> {dish.description}
            <br/>
            <br/>
            <em>Price: $</em> {dish.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default LastFiveCard