import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogNav() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light " id="navbar_top" >
        <div className="container">
      
        <Link className="navbar-brand"  exact to='/'
        >
          VskiDevelopers
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link className=" text-muted nav-link" to='/category/technology' >Technology</Link>
            </li>
            <li className="nav-item">
            <Link className="text-muted  nav-link" to='/category/design'>Design</Link>
            </li>
            <li className="nav-item">
            <Link className="text-muted  nav-link" to='/category/business'>Business</Link>
            </li>
            <li className="nav-item">
            <Link className="text-muted  nav-link" to='/category/lifestyle'>Lifestyle</Link>
            </li>
            <li className="nav-item">
            <Link className="text-muted  nav-link" to='/category/culture'>Culture</Link>
            </li>
            <li className="nav-item">
            <Link className="text-muted  nav-link" to='/category/travel'>Travel</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
