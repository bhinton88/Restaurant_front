import RestaurantList from "./RestaurantList"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function RestaurantPage({ restaurants, handleNewRestaurant, states }) {

  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate();

  function onChange (event) {
    console.log(event.target.value)
  }

  function onClick(){
    navigate("/restaurants/new_restaurant")
  }

  return (
    <section>
      <Row>
        <Col sm={3}>
          <Form.Group>
            <Form.Label>Filter by State:</Form.Label>
            <Form.Select onChange={onChange}>
            {states.map(value => 
                <option key={value.value} value={value.value}>{value.name}</option>
            )}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" onClick={onClick}>Add a New Restaurant</Button>
      <RestaurantList restaurants={restaurants} />
    </section>
  )

}

export default RestaurantPage