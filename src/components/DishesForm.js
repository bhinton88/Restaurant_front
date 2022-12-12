import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function DishesForm ({ restId }) {

  const [formData, setFormData] = useState({
    food_name: "",
    restaurant_id: `${restId}`,
    price: 0.00,
    description: "",
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
    <div id="dishesFormContainer">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Dish Name:</Form.Label>
            <Form.Control 
              type="text" 
              name='name'
              placeholder="Enter Name Here"
              value={formData.food_name}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Dish Description(Usually found on restaurant website):</Form.Label>
            <Form.Control 
              type='text'
              name='description'
              placeholder="Enter Description"
              value={formData.description}
              onChange={onChange}
            />
          </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col}>
            <Form.Label>Dish Cost:</Form.Label>
            <Form.Control 
              type='number'
              name='price'
              placeholder="Enter Dish cost:"
              value={formData.price}
              onChange={onChange}
            />
            </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Dish image:</Form.Label>
            <Form.Control 
              type='text'
              name='image'
              placeholder="Enter Dish Image URL:"
              value={formData.image}
              onChange={onChange}
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  )

}

export default DishesForm