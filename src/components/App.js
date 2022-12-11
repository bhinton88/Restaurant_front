import { useEffect, useState } from "react";
import "bootswatch/dist/simplex/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DishesPage from "./DishesPage";
import NavBar from "./NavBar";
import RestaurantPage from "./RestaurantPage";


function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/restaurants")
    .then(response => response.json())
    .then(data => setRestaurants(data))
  }, [] );

  function handleNewRestaurant (data) {
    setRestaurants([...restaurants, data])
  }

  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path="/restaurants" element={
        <RestaurantPage 
          restaurants={restaurants} 
          handleNewRestaurant={handleNewRestaurant}
        />
        }> 
          <Route path=':restaurantId/dishes' element={
            <DishesPage restaurants={restaurants} /> 
          }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// how to create a drop down with US states
// what CSS would allow me to adjust images so they are all the same
// when clicking on button on card, want it to take me to dishes through url /restaurants/restaurantID/dishes



// Hiearchy 
// -App
// --NavBar
// --RestaurantPage
// ---RestaurantForm
// ---RestaurantList
// ----RestaurantCard
// --DishesPage
// ---DishesForm
// ---DishesList
// ----DishesCard
