import './css/Homepage.css'
import './css/extra.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';
import aa from './img/aa.webp'
import bb from './img/bb.webp'
import cc from './img/cc.jpg'


import watches from './img/watches.jpg'
import mens_wear from './img/mens_wear.jpg'
import women_wear from './img/women_wear.webp'
import kids_wear from './img/kids_wear.webp'
import accessories from './img/accessories.webp'
import footwear from './img/footwear.webp'


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
<div className="crsl">
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
<br/>

<div className="container-fluid best-seller">

  <div className="banner-text">
    <h2>BEST SELLER</h2>
    <p>Top Products Of The Week</p>
  </div>
	<div className="row">
    <div className="col-md">
    <div className="row"> 
    <div className="col banner-card"><img src={ watches } alt="" /></div>
  </div>
  <div className="row">
    <div className="col banner-card"><img src={ women_wear }  alt="" /></div>
    <div className="col banner-card"><img src={ footwear } alt=""  /></div>
    </div>
    </div>



    <div className="col-md">
  <div className="row">
    <div className="col banner-card"><img src={ mens_wear } alt="" /></div>
    <div className="col banner-card"><img src={ accessories } alt="" /></div>
    </div>
  <div className="row">
    <div className="col banner-card"><img src={ kids_wear } alt=""/></div>
  </div>
  </div>
  </div>
</div>

<br/>
        </>
    );
}
export default Homepage;