import React, { Component } from "react";

class Video extends Component {
    render() {
        return (
            <div className="videoContainer">
                <video className="videoItself" muted loop autoPlay>
                <source src="/video/sphere.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default Video;