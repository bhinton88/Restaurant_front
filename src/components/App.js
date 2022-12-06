import { useEffect, useState } from "react";
import "bootswatch/dist/simplex/bootstrap.min.css";
import { Route,Switch } from "react-router-dom";
import DishesPage from "./DishesPage";
import NavBar from "./NavBar";
import RestaurantPage from "./RestaurantPage";


function App() {

  const [restaurants, setRestaurants] = useState([])
  const [dishes, setDishes] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/restaurants")
    .then(response => response.json())
    .then(data => setRestaurants(data))
  }, [] );

  useEffect( () => {
    fetch("http://localhost:9292/dishes")
    .then(response => response.json())
    .then(data => setDishes(data))
  },[])

  return(
    <div>
      <NavBar/>
      <Switch>
        <Route path="/restaurants">
        <RestaurantPage restaurants={restaurants} />
        </Route>
      </Switch>
      <Switch>
        <Route>
        <DishesPage path="/dishes"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;



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
