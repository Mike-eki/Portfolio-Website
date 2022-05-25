import { lazy, Suspense } from 'react';

const IconCentered = lazy(() => import("../UIcomponents/IconCentered"));
const ProjectCard = lazy(() => import("../UIcomponents/ProjectCard"));

function Projects () {

    return (
        <section id="projects" className="projectContainer">
            <header className="projectHeader">
                <h2 className="projectTitle">Projects</h2>
            </header>

            <div className="projectSubContainer">
            <picture className="projectCard animation">
            <Suspense fallback={<>Loading...</>}>
                <ProjectCard 
                    imgSource={"https://images.unsplash.com/photo-1560859259-fcf2b952aed8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"} 
                    titleCard={"E-commerce children's clothing"} 
                    bodyCard={"A business to costumer (B2C) e-commerce where you can find any kind of cloth for children that you want. Includes user-authentication, cart shop, and an admin panel."}
                >
                    <picture className="projectCardIcons">
                        <IconCentered
                            iconSource={"https://www.svgrepo.com/show/349402/html5.svg"}
                        />
                        <IconCentered
                            iconSource={"https://www.svgrepo.com/show/354259/react.svg"}
                        />
                    </picture>
                    <nav className='projectCardNav'>
                        <a target='_blank' href="#" className="projectCardButton disabled">
                            {"</> "}Code
                        </a>
                        <a target='_blank' href="#" className="projectCardButton disabled">
                            Live Demo
                        </a>
                    </nav>
                </ProjectCard>
            </Suspense>
            </picture>
            <picture className="projectCard animation">
            <Suspense fallback={<>Loading...</>}>
                <ProjectCard
                    imgSource={"https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873"}
                    titleCard={"Church landing page"}
                    bodyCard={"An user-friendly website where all the information about the church it's well served to all visitors from any side of the world."}
                > 
                    <picture className="projectCardIcons">
                        <IconCentered
                            iconSource={"https://www.svgrepo.com/show/354259/react.svg"}
                        />
                    </picture>
                    <nav className='projectCardNav'>
                        <a target='_blank' href="#" className="projectCardButton disabled">
                            See more
                        </a>
                    </nav>
                </ProjectCard>
            </Suspense>
            </picture>
            <picture className="projectCard animation"> 
            <Suspense fallback={<>Loading...</>}>  
                <ProjectCard 
                    imgSource={"https://images.unsplash.com/photo-1613992519026-c1a3bb8341ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"} 
                    titleCard={"RPG video game"} 
                    bodyCard={"A short video game that can be played on browsers, and also on mobile devices."} 
                >
                <nav className='projectCardNav'>
                    <a target='_blank' href="#" className="projectCardButton disabled">
                        See more
                    </a>
                </nav>
                </ProjectCard>
            </Suspense>
            </picture>
            </div>

        </section>
    )
}

export default Projects;