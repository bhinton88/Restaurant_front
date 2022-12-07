import { useState } from "react"
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit'


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

  function onChange (event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    console.log(formData)
  }

  return (
    <div id="restaurant_form_container">
      <form>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput 
              type='text'
              name="name"
              placeholder='Restaurant Name'
              onChange={onChange}
              value={formData.name}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              type='text'
              name="food_type"
              placeholder="Cuisine (i.e. German, Thai, Italian)"
              onChange={onChange}
              value={formData.food_type} 
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              type='text'
              name="city" 
              placeholder="City" 
              onChange={onChange}
              value={formData.city}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              name="state"
              placeholder="State"
              value={formData.state} // need to figure out how to create dropdown with states
            />
          </MDBCol>
        </MDBRow>
        <label htmlFor='basic-url2' className='form-label'>
          Contact Information:
        </label>
        <MDBRow>
          <MDBInput 
            type='tel'
            name="phone_number" 
            label="Phone Number"
            value={formData.phone_number}
            onChange={onChange}
          />
        </MDBRow>
      </form>
    </div>


  )

}

export default RestaurantForm