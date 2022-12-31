import Card from 'react-bootstrap/Card';

function DishesCard({ dish, handleDeleteDish }) {

  function deleteDish() {
    fetch(`http://localhost:9292/dishes/${dish.id}`,{
      method: "DELETE"
    })

    handleDeleteDish(dish.restaurant_id, dish.id)
  }

return (
  <div className="dishescard">
    <Card style= {{ width: '18rem'}}>
      <Card.Img variant="top" src={dish.image} className="dishImages" />
      <Card.Body>
        <Card.Title>{dish.dish_name}</Card.Title>
        <Card.Text>
            <em>Dish Description: </em> <br/> {dish.description} 
            <br/>
            <br/>
            <em>Price: $</em> {dish.price}
            <br/>
            <br/>
            <em>Delete this Dish -- </em>
            <button onClick={deleteDish}>
              <span role="img" aria-label="delete">
                🗑
              </span>
            </button>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
}

export default DishesCard