import { useEffect, useState } from "react";
import "bootswatch/dist/simplex/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { states } from '../states.js'
import DishesPage from "./DishesPage";
import NavBar from "./NavBar";
import RestaurantPage from "./RestaurantPage";
import RestaurantForm from "./RestaurantForm";
import LastFiveDishesSubmitted from "./LastFiveDishes";

function App() {

  const [restaurants, setRestaurants] = useState([])
  const [lastFiveDishes, setLastFiveDishes] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/restaurants")
    .then(response => response.json())
    .then(data => setRestaurants(data))
  }, [] );

  useEffect (() => {
    fetch("http://localhost:9292/last_five_dishes_submitted")
    .then(response => response.json())
    .then(data => setLastFiveDishes(data))
  }, [])

  function handleNewRestaurant (data) {
    setRestaurants([...restaurants, data])
  }



  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path="/restaurants" element={
        <RestaurantPage 
          states={states}
          restaurants={restaurants} 
          handleNewRestaurant={handleNewRestaurant}/>}
        />
        <Route path="/restaurants/new_restaurant" element={
          <RestaurantForm 
            states={states}
            handleNewRestaurant={handleNewRestaurant}
          />} 
        />
        <Route path="/restaurants/:id/dishes" element={
          <DishesPage restaurants={restaurants}/>}
        />
        <Route path="/last_five_dishes_submitted" element={
          <LastFiveDishesSubmitted dishes={lastFiveDishes} />}
        />
      </Routes>
    </div>
  );
}

export default App;

// routes -> why is restaurants array giving me issues?
// filtering restaurants by state
// updating a restaurant 
// redirect back to the restraunts page when new restaurant submitted 



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
