import cr1 from '../src/images/cr1.webp'
import cr2 from '../src/images/cr2.webp'
import cr3 from '../src/images/cr3.jpg'
function Crousel(){
    return(
        <>
        
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* 
  Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ul>
        {/* 
  The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cr1} alt="Los Angeles" />
          </div>
          <div className="carousel-item">
            <img src={cr2} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img src={cr3} alt="New York" />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
        </>
    );
}
export default Crousel;