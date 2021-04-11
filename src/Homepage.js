import './css/Homepage.css'
import './css/extra.css'
import { Carousel } from 'react-bootstrap';
import aa from './img/aa.webp'
import bb from './img/bb.webp'
import cc from './img/cc.jpg'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Homepage(){
    return( 
        <> 
        <div className="container-fluid quick-menu">
          <ul>
            <li>Mens</li>
            <li>Womens</li>
            <li>Kids</li>
            <li>Offers</li>
            <li>Deals</li>
          </ul>
        </div>
        {/* crousel start*/}
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