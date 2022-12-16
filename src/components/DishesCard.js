import Card from 'react-bootstrap/Card';

function DishesCard({ dish }) {

return (
  <div id="dishescard">
    <Card style= {{ width: '18rem'}}>
      <Card.Img variant="top" src={dish.image} className="dishImages" />
      <Card.Body>
        <Card.Title>{dish.dish_name}</Card.Title>
        <Card.Text>
            <em>Dish Description: </em> <br/> {dish.description} 
            <br/>
            <br/>
            <em>Price: $</em> {dish.price}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
}

export default DishesCard