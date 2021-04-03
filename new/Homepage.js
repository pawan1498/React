import './homepage.css'
import { Carousel } from 'react-bootstrap';
import aa from './aa.webp'
import bb from './bb.webp'
import cc from './cc.jpg'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Homepage(){
    return(
        <>

<div class="crsl">

<Carousel fade >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={aa}
      alt="First slide"
      />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bb}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cc}
      alt="Third slide"
      />
  </Carousel.Item>
</Carousel>
</div>


        </>
    );
}
export default Homepage;