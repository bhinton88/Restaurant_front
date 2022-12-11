import { useState } from "react"

function DishesForm ({ restId }) {

  const [formData, setFormData] = useState({
    food_name: "",
    restaurant_id: `${restId}`,
    price: 0.00,
    description: "",
    image: ""
  })

  return (
    <div id="dishesFormContainer">

    </div>
  )

}

export default DishesForm