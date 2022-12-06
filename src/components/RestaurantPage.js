import { MDBRow } from 'mdb-react-ui-kit'
import RestaurantCard from "./RestaurantCard"
import RestaurantForm from "./RestaurantForm"
import RestaurantList from "./RestaurantList"

function RestaurantPage({ restaurants }) {

  return (
    <section>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {restaurants.map(value => 
        <RestaurantCard restaurant={value} />
        )}
      </MDBRow>
    </section>
  )

}

export default RestaurantPage