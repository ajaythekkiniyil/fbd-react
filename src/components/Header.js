import React from 'react'
import envelope from '../images/envelope.svg'
import telephone from '../images/telephone.svg'
function Header() {
  return (
    <>
      <section className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <ul>
                <li><img src={envelope} alt='eamil'/> fbd@amritahospitals.org</li>
                <li><img src={telephone} alt='phone'/> 0129 - 2851234</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="head_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a href="https://amritahospitals.org/fbd/" className="navbar-brand">
                  <img style={{ width: 130 }} src="https://amritahospitals.org/fbd/team/asset/img/amrita-hospital-fbd.svg" alt='logo'/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a href="https://amritahospitals.org/fbd/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://amritahospitals.org/fbd/about-us/" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://amritahospitals.org/fbd/team/" className="nav-link">Our Team</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://amritahospitals.org/fbd/events" className="nav-link">Events</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://amritahospitals.org/fbd/contact-us/" className="nav-link">Contact Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://amritahospitals.org/fbd/careers/" className="nav-link">Careers</a>
                    </li>
                  </ul>
                  {/* <a target="blank" className="btn my-2 my-sm-0 query_bt" type="submit">0129 - 2851234</a> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header