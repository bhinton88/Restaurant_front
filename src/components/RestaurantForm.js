import { useState } from "react"


function RestaurantForm () {

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    food_type: "",
    phone_number: 0,
    website: "",
    online_ordering: true,
    image: ""
  })

}

export default RestaurantForm