import React, { useRef } from "react";
import VideoObserver from "../hooks/VideoObserver";

function Home() {

    const homeVideo = useRef();
    const homeContainer = useRef();
    
    //Custom Hook
    //Pausar el video si la seccion 'Home' no aparece
    VideoObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    }, homeVideo, homeContainer)
    
        return (
            <section id="home" ref={homeContainer} className="homeContainer">

                <div className="homeVideoContainer">
                    <video ref={homeVideo} className="homeVideo" muted loop autoPlay playsInline poster="./img/load-video-min.png">
                    <source src="/video/Sphere-5.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className="homeText">
                    <h2 className="homeTitle">Miqueas Moreno</h2>
                    <p className="homeDescription">Web Developer | Content Creator | Artist</p>
                    <button>Resume CV</button>
                    <button>Slide down</button>
                </div>
                
            </section>
        )
}

export default Home;