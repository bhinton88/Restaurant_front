import DishesCard from "./DishesCard"
import CardGroup from 'react-bootstrap/CardGroup';

function DishesList({ dishes }) {

  return(
    <div>
      <CardGroup >
        {dishes.map(value => 
          <DishesCard 
            key={value.id}
            dish={value}
          />
          )}
      </CardGroup>
    </div>
  )
}

export default DishesList