import React from 'react'
import {Link} from 'react-router-dom'

import "./contact.css"

function Contact() {
    return (
        <section id="contact"   className="text-page pb-4  section-inverse "> 
      
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="heading">Contact</h2>
              <div className="row">
                <div className="col-lg-6">
                  <form id="contact-form" action="#" className="contact-form" name="contact" method="POST" data-netlify="true">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="first_name">Your First Name </label>
                            <input type="text" name="first_name" placeholder="Enter your first name" required="required" className="form-control"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for=" last_name">Your Last Name </label>
                            <input type="text" name="last_name" placeholder="Enter your  last name" required="required" className="form-control"/>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="email">Your email </label>
                        <input type="email" name="email" placeholder="Enter your  email" required="required" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label for="massage">Your message for us </label>
                        <textarea rows="4" name="message" placeholder="Enter your message" required="required" className="form-control" ></textarea>
                      </div>
                      <div className="form-group" style={{margin: "20px 0"}}>
                        <div data-netlify-recaptcha="true"></div>
                      </div>
                      <div className="text-center">
                        <input type="submit" name="submit" value="Send message" className="btn btn-secondary btn-block" />
                      </div>
                      <input type="hidden" name="form-name" value="contact" />
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                
                  <p className="social"><Link  to="#" title="" className="facebook socialplatforms"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"  title="" class="twitter socialplatforms"><i class="fab fa-twitter"></i></Link>
                  <Link to="#"  title="" class="gplus socialplatforms"><i class="fab fa-google-plus-g"></i></Link>
                  <Link to="https://www.instagram.com/vski_developers/" title="" class="instagram"><i class="fab fa-instagram"></i></Link>
                  <Link title="" to="#"  class="email socialplatforms"><i class="far fa-envelope"></i></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact
