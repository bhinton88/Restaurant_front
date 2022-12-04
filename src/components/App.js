import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import RestaurantPage from "./RestaurantPage";


function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/restaurants")
    .then(response => response.json())
    .then(data => setRestaurants(data))
  }, [] );

  return(
    <div>Hello World!</div>
  );
}

export default App;



// Hiearchy 
// -App
// --RestaurantPage
// ---RestaurantForm
// ---RestaurantList
// ----RestaurantCard
// --DishesPage
// ---DishesForm
// ---DishesList
// ----DishesCard
