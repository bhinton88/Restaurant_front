import DishesList from "./DishesList"
import DishesForm from "./DishesForm"
import { useParams } from "react-router-dom"

function DishesPage({ restaurants }) {

  const { id } = useParams()

  const allRestaurants = restaurants

  console.log(allRestaurants)

  const restaurant = allRestaurants.filter(restaurant => {
    return restaurant.id === id
  })

  console.log(restaurant)

  return(
    <section>
      <DishesForm 
      />
      <DishesList
        id = {id}
        restaurants={restaurants} 
      />
    </section>
  )
}

export default DishesPage