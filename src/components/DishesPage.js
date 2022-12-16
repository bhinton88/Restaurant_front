import DishesList from "./DishesList"
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom"

function DishesPage({ restaurants }) {

  const navigate = useNavigate()

  const { id } = useParams()

  const restaurantDishes = restaurants
                  .filter(value => value.id === parseInt(id))
                  .map(value => value.dishes)

  const dishes = restaurantDishes[0]

  function onClick(){
    navigate(`/restaurants/${id}/dishes/submit_new_dish`)
  }

  return(
    <section>
      <Button variant="primary" onClick={onClick}>Add a New Dish to this Restaurant!</Button>
      <DishesList
        dishes={dishes}
        restaurants={restaurants} 
      />
    </section>
  )
}

export default DishesPage