import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://g.foolcdn.com/editorial/images/470276/gettyimages-653387690.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://freedesignfile.com/upload/2017/10/Homemade-tasty-tacos-Stock-Photo-06.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/856736400/photo/friends-doing-a-wine-tasting.jpg?s=612x612&w=0&k=20&c=vNS4eDHkj8m7JH32oqD6R3VrdoL25mGKHZMhJAcxwg8="
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home