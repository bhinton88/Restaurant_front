import DishesCard from "./DishesCard"
import CardGroup from 'react-bootstrap/CardGroup';

function DishesList({ dishes, handleDeleteDish }) {

  return(
    <div>
      <CardGroup >
        {dishes.map(value => 
          <DishesCard 
            key={value.id}
            dish={value}
            handleDeleteDish={handleDeleteDish}
          />
          )}
      </CardGroup>
    </div>
  )
}

export default DishesList