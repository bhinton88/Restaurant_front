import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function RestaurantForm ({ states,handleNewRestaurant }) {

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    food_type: "",
    phone_number: 0,
    website: "",
    online_ordering: '',
    image: ""
  })


  function onChange (event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    console.log(formData)
  }

  function onSubmit(event) {
    event.preventDefault()
    
    fetch("http://localhost:9292/restaurants", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => handleNewRestaurant(data) )
  }

  return (
    <div id="restaurantFormContainer">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Restaurant Name:</Form.Label>
            <Form.Control 
              type="text" 
              name='name'
              placeholder="Enter Name Here"
              value={formData.name}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cuisine type:</Form.Label>
            <Form.Control 
              type='text'
              name='food_type'
              placeholder="Enter Cuisine type (i.e. Thai, Italian, Mexican)"
              value={formData.food_type}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>City:</Form.Label>
            <Form.Control 
              type='text'
              name='city'
              placeholder="Enter City"
              value={formData.city}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State:</Form.Label>
            <Form.Select 
              name="state"
              onChange={onChange}
              value={formData.state}
            >
              {states.map(value => 
                <option key={value.value} value={value.value}>{value.name}</option>
                )}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Restraurant Image URL:</Form.Label>
          <Form.Control 
              type='text'
              name='image'
              placeholder='Enter Image URL'
              value={formData.image}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control 
              type="tel"
              name='phone_number'
              maxLength='10'
              value={formData.phone_number}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Do they have online ordering?</Form.Label>
            <Form.Select 
              name="online_ordering" 
              onChange={onChange}
              value={formData.online_ordering}
            >
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">Submit New Restaurant</Button>
      </Form>
    </div>
  )

}

export default RestaurantForm