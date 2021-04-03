import './Homepage.css'
import { Carousel } from 'react-bootstrap';
import aa from './aa.webp'
import bb from './bb.webp'
import cc from './cc.jpg'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Homepage(){
    return(
        <> 
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
        {/* crousel end */}
   <div class="container-fluid  aa ">
  <div class="row ">
    <div class="col-lg-2 col-sm-5  border text-center mx-3 my-1">
      1 One of three columns
    </div>
    <div class="col-lg-2 col-sm-5  border text-center mx-3 my-1">
      2 One of three columns
    </div>
    <div class="col-lg-2 col-sm-5  border text-center mx-3 my-1">
      3 One of three columns
    </div> 
    <div class="col-lg-2 col-sm-5  border text-center mx-3 my-1">
      4 One of three columns
    </div>
    <div class="col-lg-2 col-sm-5  border text-center mx-3 my-1">
      5 One of three columns
    </div>
    <div class="col-lg-2 col-sm-5  border text-center mx-3 my-1">
      6  One of three columns
    </div>
  </div>
 </div>

{/* <div className="container border"> */}
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        {/* <div className="row border"> */}
          {/* <div className="col-md-8 border">.col-md-8</div> */}
          {/* <div className="col-6 col-md-4 border">.col-6 .col-md-4</div> */}
        {/* </div> */}
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        {/* <div className="row"> */}
          {/* <div className="col-6 col-md-4 border">.col-6 .col-md-4</div> */}
          {/* <div className="col-6 col-md-4 border">.col-6 .col-md-4</div> */}
           {/* <div className="col-6 col-md-4 border">.col-6 .col-md-4</div> */}
        {/* </div> */}
        {/* Columns are always 50% wide, on mobile and desktop */}
        {/* <div className="row"> */}
          {/* <div className="col-6 border">.col-6</div> */}
          {/* <div className="col-6 border">.col-6</div> */}
        {/* </div> */}
      {/* </div> */}

      {/* scroll menu */}
      <div className="container-fluid smenu">
        <h1 className="mt-5">Deals Of The Day</h1>
        <p className="subtitle">GRAb the best deal on home appliance ,fashion ,electronics </p>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
          <div className="col">
            <div className="card card-block card-1" />
          </div>
          <div className="col">
            <div className="card card-block card-2" />
          </div>
          <div className="col">
            <div className="card card-block card-3" />
          </div>
          <div className="col">
            <div className="card card-block card-4" />
          </div>
          <div className="col">
            <div className="card card-block card-5" />
          </div>
          <div className="col">
            <div className="card card-block card-6" />
          </div>
          <div className="col">
            <div className="card card-block card-7" />
          </div>
          <div className="col">
            <div className="card card-block card-8" />
          </div>
          <div className="col">
            <div className="card card-block card-9" />
          </div>
          <div className="col">
            <div className="card card-block card-10" />
          </div>
        </div>
      </div>
        </>
    );
}
export default Homepage;