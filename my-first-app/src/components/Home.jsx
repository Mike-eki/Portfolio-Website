import React, { useEffect, useRef, useMemo } from "react";



function Home() {

    
    //Pausar el video si la seccion 'Home' no aparece
    const homeVideo = useRef();
    const homeContainer = useRef();

    const callbackFunction = entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            homeVideo.current.play();
        } else {
            homeVideo.current.pause();
        }
    }

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }
    }, []);

    useEffect(() => {
        // max-width: 765px
        //const matchMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const observeHome = new IntersectionObserver(callbackFunction, options);
        const currentHome = homeContainer.current;
        // const currentVideo = homeVideo.current;
        if (currentHome) observeHome.observe(currentHome);

        return () => {
            if (currentHome) observeHome.unobserve(currentHome);
        }
    }, [homeContainer, options])

        return (
            <section id="1" ref={homeContainer} className="homeContainer">

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