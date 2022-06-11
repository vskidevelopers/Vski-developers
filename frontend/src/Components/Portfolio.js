import React from 'react'

import port1 from "../images/portfolio-1.jpg"
import port2 from "../images/portfolio-2.jpg"
import port3 from "../images/portfolio-3.jpg"
import port4 from "../images/portfolio-4.jpg"
import port5 from "../images/portfolio-5.jpg"
import port6 from "../images/portfolio-6.jpg"
import port7 from "../images/portfolio-7.jpg"
import port8 from "../images/portfolio-8.jpg"
import port9 from "../images/portfolio-9.jpg"

import "./portfolio.css"

function Portfolio() {
    return (
        <section id="portfolio" className="gallery">
        <div className="container clearfix">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <h2 className="heading">Portfolio</h2>
                  <p>Listed below is my fine colection of my previous as well as on going Projects</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="box"><a href={port1} data-lightbox="image-1" data-title="Dusstech Brands Landing Page" className="has-border"><img loading="lazy" src={port1} alt=""  className="img-fluid" /></a></div>
                </div>
                <div className="col-md-4">
                  <div className="box"><a href={port2}data-lightbox="image-1" data-title="Dusstech Brands About Page" className="has-border"><img loading="lazy" src={port2} alt=""  className="img-fluid" /></a></div>
                </div>
                <div className="col-md-4">
                  <div className="box"><a href={port3} data-lightbox="image-1" data-title="Vista Studios Landing Page " className="has-border"><img loading="lazy" src={port3} alt=""  className="img-fluid" /></a></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="box"><a href={port4} data-lightbox="image-1" data-title="Vista Studios Team Page" className="has-border"><img loading="lazy" src={port4} alt=""  className="img-fluid" /></a></div>
                </div>
                <div className="col-md-4">
                  <div className="box"><a href={port5} data-lightbox="image-1" data-title="Vista Studios Service Page" className="has-border"><img loading="lazy" src={port5} alt=""  className="img-fluid" /></a></div>
                </div>
                <div className="col-md-4">
                  <div className="box"><a href={port6} data-lightbox="image-1" data-title="Upcoming Vista Videos Online Shop. Fully Resposive" className="has-border"><img loading="lazy" src={port6} alt=""  className="img-fluid" /></a></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="box"><a href={port7} data-lightbox="image-1" data-title="A snapshot of Upcoming eCommerse Website called Vista Videos Online" className="has-border"><img loading="lazy" src={port7} alt=""  className="img-fluid"/></a></div>
                </div>
                <div className="col-md-4">
                  <div className="box"><a href={port8}data-lightbox="image-1" data-title="A Django-Allaouth powered sign In page" className="has-border"><img loading="lazy" src={port8} alt=""  className="img-fluid"/></a></div>
                </div>
                <div className="col-md-4">
                  <div className="box"><a href={port9} data-lightbox="image-1" data-title="Css Grid powered gallery" className="has-border"><img loading="lazy" src={port9}alt=""  className="img-fluid"/></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Portfolio
