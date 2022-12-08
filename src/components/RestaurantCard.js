import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
  MDBCardLink
} from 'mdb-react-ui-kit';
import Emoji from 'a11y-react-emoji'

function RestaurantCard({restaurant}) {

  return (
    <MDBCol>
      <MDBCard className='h-100 w-75'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={restaurant.image} fluid alt='...'  position='top' sizes='small'/>
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle><strong>{restaurant.name}</strong></MDBCardTitle>
          <MDBCardText>
            <em>Cuisine type:</em> {restaurant.food_type} 
            <br/>
            <em>Location:</em>  {restaurant.city},{restaurant.state}
            <br/>
            <em>Contact:</em> {restaurant.phone_number}
            <br/>
            <em>Online Ordering :</em> {restaurant.online_ordering === "Yes" ?  <Emoji symbol='✅' label='check-mark' /> : <Emoji symbol='❌' lable="red-x" />}
          </MDBCardText>
          <MDBCardLink href={restaurant.website}>Website</MDBCardLink>
          <br/>
          <br/>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default RestaurantCard