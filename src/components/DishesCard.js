import Card from 'react-bootstrap/Card';

function DishesCard({ dish }) {

  console.log(dish)

return (
  <Card style= {{ width: '18rem'}}>
    <Card.Img variant="top" src={dish.image} />
    <Card.Body>
      <Card.Title>{dish.food_name}</Card.Title>
      <Card.Text>
          <em>Dish Description: </em> {dish.description} 
          <br/>
          <em>Price: </em> {dish.price}
      </Card.Text>
    </Card.Body>
  </Card>
)
  // )

}

export default DishesCard