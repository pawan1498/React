import img1 from './img/illustration-8.png'
import './css/theme.css'
import gicon from './assets/svg/google-icon.svg'
function Login(){
return(
    <>
   <section className="section-border border-primary ">
        <div className="container d-flex flex-column ">
          <div className=" row align-items-center justify-content-center no-gutters min-vh-100">
            <div className="col-8 col-md-6 col-lg-7 offset-md-1 order-md-2 mt-auto mt-md-0 pt-8 pb-4 py-md-11">
              {/* Image */}
              <img src={img1} alt="..." className="img-fluid" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 order-md-1 mb-auto mb-md-0 pb-8 py-md-11">
              {/* Heading */}
              <h1 className=" text-center">
                Login / Signup
              </h1>
              {/* Text */}
              <p className=" mb-6 text-center text-muted">
                Join us to make a difference
              </p>

              {/* Submit
              <button className="btn btn-block btn-primary p_auth" type="submit" onclick="handleClick()">
                Sign in
              </button> */}

              {/* Submit */}
              <button className="btn btn-block btn-primary" type="submit">
                <img src ={gicon}/>{' '}{' '}
                Continue with Google
              </button>
                
            </div>
          </div> {/* / .row */}
        </div> {/* / .container */}
      </section>
    </>
)
}
export default Login;