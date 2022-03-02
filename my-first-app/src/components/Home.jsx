import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <section className="homeContainer">

                <div className="homeBlendMode"></div>

                <div className="homeText">
                    <h2 className="homeTitle">Miqueas Moreno</h2>
                    <p className="homeDescription">Web Developer | Content Creator | Artist</p>
                </div>
                
                <video className="homeVideo" muted loop autoPlay>
                <source src="/video/sphere.mp4" type="video/mp4"/>
                </video>
                
            </section>
        )
    }
}

export default Home;