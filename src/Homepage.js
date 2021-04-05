import './Homepage.css'
import Crousel from './Crousel'
import dod1 from '../src/images/dod1.webp'
import dod2 from '../src/images/dod2.webp'
import dod3 from '../src/images/dod3.webp'
import dod4 from '../src/images/dod4.webp'
import dod5 from '../src/images/dod5.webp'
import dod6 from '../src/images/dod6.jpg'
import cat1 from '../src/images/cat1.jpg'
import cat2 from '../src/images/cat2.jpg'
import cat3 from '../src/images/cat3.jpg'
import cat4 from '../src/images/cat4.jpg'
import cat5 from '../src/images/cat5.jpg'
function Homepage(){
    return(
        <>
        {/* crousel start*/}
            <Crousel/>
        {/* crousel end */}



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
       <br></br>


      {/* scroll menu */}
      <div className="container-fluid smenu">
        <h1 className="mt-5">Deals Of The Day</h1>
        <p className="subtitle">GRAb the best deal on home appliance ,fashion ,electronics </p>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
          <div className="col-2">
            {/* <div className="card card-block card-1" /> */}
            <img src={dod1} className="card-block"/>
            <p className="subtitle">Product name</p>
          </div>
          <div className="col-2">
            {/* <div className="card card-block card-2" /> */}
            <img src={dod6} className="card-block"/>
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-3" />
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-4" />
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-5" />
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-6" />
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-7" />
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-8" />
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-9" />
            <p className="subtitle">Product Name</p>
          </div>
          <div className="col-2">
            <div className="card card-block card-10" />
            <p className="subtitle">Product Name</p>
          </div>
        </div>
      </div>

      {/* scroll menu end */}

      {/* categories START*/}
<div class="container-fluid smenu ">
  <h1 className="mt-5">CATEGORIES</h1>
  <p className="subtitle"> let put it on your bag  </p>
  <div class="row mt-4 pb-4 pt-2">
    <div class="col-lg-2 col-md-2  aa text-center mx-3 my-1">
      <img src={cat1} className="cate_img"></img>
      <p>1 One of three columns</p>
    </div>
    <div class="col-lg-2 col-md-2  aa text-center mx-3 my-1">
      <img src={cat2} className="cate_img"></img>
      <p>2 One of three columns</p>
    </div>
    <div class="col-lg-2 col-md-2  aa text-center mx-3 my-1">
      <img src={cat3} className="cate_img"></img>
      <p>3 One of three columns</p>
    </div> 
    <div class="col-lg-2 col-md-2  aa text-center mx-3 my-1">
      <img src={cat4} className="cate_img"></img>
      <p>4 One of three columns</p>
    </div>
    <div class="col-lg-2 col-md-2  aa text-center mx-3 my-1">
      <img src={cat5} className="cate_img"></img>
      <p>5 One of three columns</p>
    </div>
  </div>
 </div>

{/* categories END  */}

{/* trending START*/}
 <div className="polaroid">
<div class="container-fluid smenu ">
  <h1 className="mt-5">TRENDING</h1>
  <p className="subtitle"> polaroid property in this block  </p>
  <div class="row mt-4 pb-4 pt-2">
    <div class="col-lg-2   aa text-center mx-3 my-1">
      <img src={cat1} className="cate_img"></img>
      <p>1 One of three columns</p>
    </div>
    <div class="col-lg-2   aa text-center mx-3 my-1">
      <img src={cat2} className="cate_img"></img>
      <p>2 One of three columns</p>
    </div>
    <div class="col-lg-2   aa text-center mx-3 my-1">
      <img src={cat3} className="cate_img"></img>
      <p>3 One of three columns</p>
    </div> 
    <div class="col-lg-2   aa text-center mx-3 my-1">
      <img src={cat4} className="cate_img"></img>
      <p>4 One of three columns</p>
    </div>
    <div class="col-lg-2   aa text-center mx-3 my-1">
      <img src={cat5} className="cate_img"></img>
      <p>5 One of three columns</p>
    </div>
  </div>
 </div>
 </div>
{/* TRENDING end */}
        </>
    );
}
export default Homepage;