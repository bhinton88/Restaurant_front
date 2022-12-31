import CardGroup from 'react-bootstrap/CardGroup';
import LastFiveCard from './LastFiveCard';
import { useState, useEffect } from "react" 

function LastFiveDishesSubmitted( ) {

  const [lastFiveDishes, setLastFiveDishes] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/last_five_dishes_submitted")
    .then(response => response.json())
    .then(data => setLastFiveDishes(data))
  }, [])

  return(
    <div className='lastfivedishes'>
      <CardGroup>
        {lastFiveDishes.map(value => 
          <LastFiveCard key={value.id} dish={value} />
        )}
      </CardGroup>
    </div>
  )
}

export default LastFiveDishesSubmitted;