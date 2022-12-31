import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function UpdateRestaurant({ restaurant, updatedRestaurants, onUpdateSubmit}) {

  const navigate = useNavigate()

  const { id, phone_number, online_ordering, website} = restaurant

  const [formData, setFormData] = useState({
    phone_number: phone_number,
    online_ordering: online_ordering,
    website: website
  })
  
  function onChange (event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function onSubmitUpdatedRestaurant (event) {
    event.preventDefault()

    fetch(`http://localhost:9292/restaurants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        phone_number: formData.phone_number,
        online_ordering: formData.online_ordering,
        website: formData.website
      })
    })
    .then(response => response.json())
    .then(data => updatedRestaurants(data))

    alert("Restaurant Updated")

    onUpdateSubmit(value => !value)
  
  }


  return (  
    <div id="restaurantFormContainer">
      <Form onSubmit={onSubmitUpdatedRestaurant} >
        <Row className="mb-3">
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
        </Row>
        <Row className="mb-3">
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
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Website URL:</Form.Label>
            <Form.Control 
              type='text'
              name='website'
              placeholder='Enter Website URL'
              value={formData.website}
              onChange={onChange}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">Update Restaurant</Button>
      </Form>
    </div>
  );
}



export default UpdateRestaurant