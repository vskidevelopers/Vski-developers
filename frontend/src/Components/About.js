import React from 'react'
import {Link} from 'react-router-dom'
import about from "../images/about.jpg"

import "./about.css"

function About() {
    return (
        <section id="about" className="text">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="heading">About me</h2>
              <p className="lead">The Solution for the Modern Web Programming</p>
              <p>I am a certified Full Stack Web Developer with two years experience of frontEnd web development majoring in the current most popular frontEnd framework; ReactJs. <br/> I also have one year expirinece of backEnd web development specalized in  Python's Django; one of the Top backend frameworks and PostgreSQL for Database administration. Additionally, im a co-founder of <Link to="#">VskiDevelopers</Link>, an upcoming  web Agency based in Kenya</p>
            </div>
            <div className="col-lg-5 mx-auto centered">
              <p>
                <div className="rounded-circle-div"><img src={about}  alt="" loading="lazy" class="rounded-circle-img" /></div>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
