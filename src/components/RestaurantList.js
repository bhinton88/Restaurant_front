import RestaurantCard from "./RestaurantCard"
import CardGroup from 'react-bootstrap/CardGroup';

function RestaurantList ({restaurants, handleDeletedRestaurant, updatedRestaurants}) {

  return (
    <div>
      <CardGroup>
        {restaurants.map(value => 
          <RestaurantCard 
            key={value.id} 
            updatedRestaurants={updatedRestaurants}
            restaurant={value}
            handleDeletedRestaurant={handleDeletedRestaurant} 
          />
        )}
      </CardGroup>
    </div>
  )

}

// will create a card for EACH restaurant 

export default RestaurantList