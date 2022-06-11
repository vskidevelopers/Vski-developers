import React,  { Component }from 'react'
import { Link } from "react-scroll";
import {NavLink} from 'react-router-dom';

import "./navbar.css"

let navigationbar;
let sticky;

const ExtLink= [
  {
    id:1,
    text:'Vista Studios',
    url:'http://vista-online.herokuapp.com/'
  },
  {
  id:2,
  text:'VskiDevelopers',
  url:'#'
},
{
  id:3,
  text:'Genize Branding',
  url:'#'
}
]

class Navbar extends Component {

    componentDidMount() {
        navigationbar = document.getElementById("navbar_top");
        sticky = navigationbar.offsetTop;
        window.addEventListener('scroll', this.handleSticky);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleSticky);
    }

    handleSticky = () => {
        if (window.pageYOffset > sticky) {
            navigationbar.classList.add("sticky")
        } else {
            navigationbar.classList.remove("sticky");
        }
    }

    render() {
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
            <li className="nav-item ">
              <Link className="nav-link" 
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-scroll" 
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-scroll" to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-scroll" to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/#"
              >
                Projects
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                {ExtLink.map((link)=>{
                  return <a className="dropdown-item" href={link.url} key={link.id}>
                  {link.text}
                </a>
                })}

               

                <Link className="dropdown-item vski" to="#">
                  VskiDevelopers
                </Link>

                <Link className="dropdown-item " to="#" target="_blank" >
                  Genize Branding
                </Link>
                <Link className="dropdown-item " to="#" target="_blank" >
                  Dussech Brands
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
    }
}

export default Navbar
