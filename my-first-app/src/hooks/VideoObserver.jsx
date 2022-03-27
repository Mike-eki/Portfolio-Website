import React, { useEffect, useMemo } from "react";

const VideoObserver = (options, videoRef, containerRef) => {
    //Hook itself
    const videoPlayStop = entries => {
        const [entry] = entries;
        if (entry.isIntersecting) videoRef.current.play();
        else videoRef.current.pause();
    }

    const optionsMemo = useMemo(() => {
        return options
    }, [options]);

    useEffect(() => {
        const observeContainer = new IntersectionObserver(videoPlayStop, optionsMemo);
        const currentContainer = containerRef.current;
        if (currentContainer) observeContainer.observe(currentContainer);
        return () => {
            if (currentContainer) observeContainer.unobserve(currentContainer);
        }
    }, [containerRef, optionsMemo])

}

export default VideoObserver;