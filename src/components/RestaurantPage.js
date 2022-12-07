import RestaurantCard from "./RestaurantCard"
import RestaurantForm from "./RestaurantForm"
import RestaurantList from "./RestaurantList"

function RestaurantPage({ restaurants }) {

  return (
    <section>
      <RestaurantForm />
      <RestaurantList restaurants={restaurants} />
    </section>
  )

}

export default RestaurantPage