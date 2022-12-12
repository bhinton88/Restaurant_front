import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Emoji from 'a11y-react-emoji'
import { useNavigate } from "react-router-dom"

function RestaurantCard({restaurant}) {

  const navigate = useNavigate()

  function onClick () {
    navigate(`/restaurants/${restaurant.id}/dishes`)
  }

  return (
    <Card style= {{ width: '18rem'}}>
      <Card.Img variant="top" src={restaurant.image} className="restaurantCardImages" />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
            <em>Cuisine type:</em> {restaurant.food_type} 
            <br/>
            <em>Location:</em>  {restaurant.city},{restaurant.state}
            <br/>
            <em>Contact:</em> {restaurant.phone_number}
            <br/>
            <em>Online Ordering :</em> {restaurant.online_ordering === "Yes" ?  <Emoji symbol='✅' label='check-mark' /> : <Emoji symbol='❌' lable="red-x" />}
        </Card.Text>
        <Button variant="primary" onClick={onClick}>Check out our dishes</Button>
      </Card.Body>
    </Card>
  )
}

export default RestaurantCard

// 