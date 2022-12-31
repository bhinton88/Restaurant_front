import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateRestaurant from './UpdateRestaurant';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

function RestaurantCard({restaurant, handleDeletedRestaurant, updatedRestaurants}) {

  const [toggle, setToggle] = useState(false)

  const navigate = useNavigate()

  const { id, image, name, food_type, city, state, phone_number, online_ordering, website} = restaurant

  function onClick () {
    navigate(`/restaurants/${id}/dishes`)
  }

  function onDeleteSubmit () {
    fetch(`http://localhost:9292/restaurants/${id}`,{
      method: "DELETE"
    })

    handleDeletedRestaurant(id)
  }

  function onUpdateSubmit() {
    setToggle(value => !value )
  }

  return (
    <div id="restaurantcard">
      <Card style= {{ width: '18rem'}}>
        <Card.Img variant="top" src={image} className="restaurantCardImages" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              <em>Cuisine type:</em> {food_type} 
              <br/>
              <em>Location:</em>  {city},{state}
              <br/>
         </Card.Text>
         { toggle ? 
              <UpdateRestaurant 
                onUpdateSubmit={onUpdateSubmit}
                restaurant={restaurant}
                updatedRestaurants={updatedRestaurants}
              /> :
              <Card.Text>
                <em>Contact:</em> {phone_number}
                <br/>
                <em>Online Ordering :</em> {online_ordering === "Yes" ?  <span>✅</span> : <span>❌</span>}
                <br/>
                <br/>
                {website ? <a href={website} target="_blank">Restaurant Website </a> : null }
              </Card.Text>
              }          
          <Button variant="primary" onClick={onClick}>Check out our dishes!</Button>
          <div id="restformbuttons">
            <Button onClick={onUpdateSubmit} variant='outline-info'>
              <span role="img" aria-label="pencil">
                Edit ✏️
              </span>
            </Button>
            <Button onClick={onDeleteSubmit} variant='outline-primary'>
              <span role="img" aria-label="delete">
                Delete 🗑
              </span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RestaurantCard

// 