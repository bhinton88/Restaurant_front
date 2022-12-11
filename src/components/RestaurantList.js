import RestaurantCard from "./RestaurantCard"
import CardGroup from 'react-bootstrap/CardGroup';

function RestaurantList ({restaurants}) {

  return (
    <div>
      <CardGroup>
        {restaurants.map(value => 
          <RestaurantCard 
            key={value.id} 
            restaurant={value} 
          />
        )}
      </CardGroup>
    </div>
  )

}

// will create a card for EACH restaurant 

export default RestaurantList