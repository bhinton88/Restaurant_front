import { useEffect, useState } from "react";
import "bootswatch/dist/simplex/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { states } from '../states.js'
import NavBar from "./NavBar";
import Home from "./Home.js";
import DishesPage from "./DishesPage";
import DishesForm from "./DishesForm.js";
import RestaurantPage from "./RestaurantPage";
import RestaurantForm from "./RestaurantForm";
import LastFiveDishesSubmitted from "./LastFiveDishes";

function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/restaurants")
    .then(response => response.json())
    .then(data => setRestaurants(data))
  },[]);

  function handleNewRestaurant (data) {
    setRestaurants([...restaurants, data])
  }

  function handleNewDish(newDish) {
   const updatedRestaurants = restaurants.map(rest => {
    if(rest.id === newDish.restaurant_id){
      return { 
        ...rest, 
        dishes: [...rest.dishes, newDish]
      }
    } else {
      return rest
    }
   })
   setRestaurants(updatedRestaurants)
  }

  function handleDeleteDish (restId, dishId) {
    const updatedRestaurants = restaurants.map(rest => {
      if(restId === rest.id){
        return {
          ...rest,
          dishes: rest.dishes.filter(value => value.id !== dishId)
        }
        } else {
          return rest
        }
      })

      setRestaurants(updatedRestaurants)
    }

  function handleDeletedRestaurant(id){
    const updatedRestaurants = restaurants.filter(value => value.id !== id)

    setRestaurants(updatedRestaurants)
  }

  function updatedRestaurants (updatedRestaurant) {
    const updatedRestaurants = restaurants.map(value =>  {
      if(value.id === updatedRestaurant.id){
        return updatedRestaurant
      } else {
        return value 
      }
    })

    setRestaurants(updatedRestaurants)
  }

  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/restaurants" element={
        <RestaurantPage 
          states={states}
          restaurants={restaurants} 
          handleNewRestaurant={handleNewRestaurant}
          handleDeletedRestaurant={handleDeletedRestaurant}
          updatedRestaurants={updatedRestaurants}
        />}
        />
        <Route path="/restaurants/new_restaurant" element={
          <RestaurantForm 
            states={states}
            handleNewRestaurant={handleNewRestaurant}
          />} 
        />
        <Route path="/restaurants/:id/dishes" element={
          <DishesPage 
            restaurants={restaurants}
            handleDeleteDish={handleDeleteDish}
          />}
        />
        <Route path="/restaurants/:id/dishes/submit_new_dish" element={
          <DishesForm handleNewDish={handleNewDish} />
        }
        />
        <Route path="/last_five_dishes_submitted" element={
          <LastFiveDishesSubmitted />}
        />
      </Routes>
    </div>
  );
}

export default App;


// Hiearchy 
// -App
// --NavBar
// --DishesForm
// --RestaurantForm
// --RestaurantPage
// ---RestaurantList
// ----RestaurantCard
// --DishesPage
// ---DishesList
// ----DishesCard
// --Last Five dishes submitted
