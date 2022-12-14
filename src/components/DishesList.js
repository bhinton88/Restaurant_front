import DishesCard from "./DishesCard"
import CardGroup from 'react-bootstrap/CardGroup';

function DishesList({ restaurants, id }) {

  return(
    <CardGroup >
      {/* {dishes.map(value => 
        <DishesCard 
          key={value.id} 
          dish={value} 
        />
        )} */}
    </CardGroup>
  )
}

export default DishesList