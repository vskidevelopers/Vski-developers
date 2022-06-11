import React from 'react'
import home from "../images/home.jpg"

import "./intro.css"

function Intro() {
    return (
        <div id="intro" style={{backgroundImage: `url(${home})`,  backgroundPosition:"center"}} className="intro">       
            <div className="content">
                    <div className="container clearfix">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 mx-auto">
                            <p className="italic">hello, nice to meet you!</p>
                            <h1>I am Ben and I am a Fullstack Web Developer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
