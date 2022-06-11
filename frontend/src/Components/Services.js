import React from 'react'

import "./services.css"

function Services() {
    return (
        <section id="services" className="section-inverse" >  
        <div className="container">
          <div className="row services">
            <div className="col-lg-12">
              <h2 className="heading">Services</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="box">
                    <div className="icon"><i className="fa fa-desktop" style={{color:'#fff'}}></i></div>
                    <h5>Webdesign and development</h5>
                    <p>I design and build Websites of all types; from the static pages of personal profiles websites to the dynamic websites of blog sites as well as eCommerse websites. </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="icon"><i className="fa fa-print" style={{color:'#fff'}}></i></div>
                    <h5>Print and Design</h5>
                    <p>For you to stand out in today’s crowded market space, your business must remain innovative in using eye-catchy yet elegant logo design, subtle yet bold fonts and color themes which speak volumes on behalf of the brand.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="icon"><i className="fa fa-globe" style={{color:'#fff'}}></i></div>
                    <h5>Webhosting</h5>
                    <p>Through <strong>V.skidevelopers</strong> and other partnerships, I give offers and affordable rates for hosting your websites. I also buy and sell dormains </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Services
