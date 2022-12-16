import RestaurantList from "./RestaurantList"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function RestaurantPage({ restaurants, states }) {

  const [filterState, setFilterState] = useState("all")

  const navigate = useNavigate();

  function onChange (event) {
    setFilterState(event.target.value)
  }

  let filteredRestaurants;
  
  if(filterState === "all"){
    filteredRestaurants = restaurants
  } else {
    filteredRestaurants = restaurants.filter(value => value.state === filterState)

  }

  function onClick(){
    navigate("/restaurants/new_restaurant")
  }

  return (
    <section id="restpage">
      <Row>
        <Col sm={3}>
          <Form.Group>
            <Form.Label>Filter by State:</Form.Label>
            <Form.Select onChange={onChange}>
            <option value="all">All States</option>
            {states.map(value => 
                <option key={value.value} value={value.value}>{value.name}</option>
            )}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Button id="newrestaurant" variant="primary" onClick={onClick}>Add a New Restaurant</Button>
      <RestaurantList restaurants={filteredRestaurants} />
    </section>
  )

}

export default RestaurantPage