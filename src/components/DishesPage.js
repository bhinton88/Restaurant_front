import DishesList from "./DishesList"
import DishesForm from "./DishesForm"
import { useParams } from "react-router-dom"

function DishesPage({ restaurants }) {

  const { id } = useParams()

  console.log(id)

  return(
    <section>
      <DishesForm 
        restId={id}
      />
      <DishesList 
        restId={id} 
        restaurants={restaurants} 
      />
    </section>
  )
}

export default DishesPage