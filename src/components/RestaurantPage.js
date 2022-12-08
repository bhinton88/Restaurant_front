import RestaurantCard from "./RestaurantCard"
import RestaurantForm from "./RestaurantForm"
import RestaurantList from "./RestaurantList"

function RestaurantPage({ restaurants, handleNewRestaurant }) {

  return (
    <section>
      <RestaurantForm handleNewRestaurant={handleNewRestaurant} />
      <RestaurantList restaurants={restaurants} />
    </section>
  )

}

export default RestaurantPage