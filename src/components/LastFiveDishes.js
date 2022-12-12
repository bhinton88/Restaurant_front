import CardGroup from 'react-bootstrap/CardGroup';
import LastFiveCard from './LastFiveCard';

function LastFiveDishesSubmitted({ dishes }) {

  return(
    <CardGroup>
      {dishes.map(value => 
        <LastFiveCard key={value.id} dish={value} />
      )}
    </CardGroup>
  )
}

export default LastFiveDishesSubmitted;