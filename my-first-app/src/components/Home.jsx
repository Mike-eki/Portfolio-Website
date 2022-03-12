import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <section id="1" className="homeContainer">

                <div className="homeVideoContainer">
                    <video className="homeVideo" muted loop autoPlay>
                    <source src="/video/sphere.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className="homeText">
                    <h2 className="homeTitle">Miqueas Moreno</h2>
                    <p className="homeDescription">Web Developer | Content Creator | Artist</p>
                </div>
                
                
                
            </section>
        )
    }
}

export default Home;