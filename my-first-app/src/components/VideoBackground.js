import React, { Component } from "react";

class VideoBackground extends Component {
    render() {
        return (
            <div className="videoBackContainer">

                <div className="videoBlend"></div>

                <div className="videoText">
                    <h2 className="videoTitle">Miqueas Moreno</h2>
                    <p className="videoDescription">Web Devolper | Content Creator | Artist</p>
                </div>
                
                <video className="videoItself" muted loop autoPlay>
                <source src="/video/sphere.mp4" type="video/mp4"/>

                </video>
            </div>
        )
    }
}

export default VideoBackground;