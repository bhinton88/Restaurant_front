import RestaurantCard from "./RestaurantCard"
import { MDBRow } from 'mdb-react-ui-kit'

function RestaurantList ({restaurants}) {

  return (
    <div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {restaurants.map(value => 
          <RestaurantCard key={value.id} restaurant={value} />
        )}
      </MDBRow>
    </div>
  )

}

// will create a card for EACH restaurant 

export default RestaurantList