import DishesCard from "./DishesCard"
import CardGroup from 'react-bootstrap/CardGroup';

function DishesList({ restaurants, restId }) {

  console.log(restId)

  const restaurant = restaurants.filter(value => value.id === restId)

  const dishes = restaurant.foods

  console.log(dishes)

  return(
    <CardGroup >
      {dishes.map(value => 
        <DishesCard dish={value} />
        )}
    </CardGroup>
  )
}

export default DishesList