import IconCentered from '../UIcomponents/IconCentered';
import ProjectCard from '../UIcomponents/ProjectCard'

function Projects () {

    return (
        <section id="projects" className="projectContainer">
            <header className="projectHeader">
                <h2 className="projectTitle">Projects</h2>
            </header>

            <div className="projectSubContainer">

                <ProjectCard 
                    imgSource={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"} 
                    titleCard={"Este es un titulo de la carta"} 
                    bodyCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos reprehenderit facilis voluptatibus quod cum assumenda modi qui voluptates odio et quaerat sint dolor asperiores, natus iusto animi exercitationem officia."}
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
                        <a href="#" className="projectCardButton">
                            See more
                        </a>
                        <a href="#" className="projectCardButton">
                            Live Demo
                        </a>
                    </nav>
                </ProjectCard>

                <ProjectCard
                    imgSource={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}
                    titleCard={"Este es otro titulo"}
                    bodyCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minima ea error saepe, dicta quaerat fugiat aut officiis odit? Magnam velit, tempore nemo tempora officiis reiciendis illum repellat ut. Numquam dolore quae aut libero sit illum saepe quibusdam! Autem, aliquid?"}
                > 
                    <picture className="projectCardIcons">
                        <IconCentered
                            iconSource={"https://www.svgrepo.com/show/354259/react.svg"}
                        />
                    </picture>
                    <nav className='projectCardNav'>
                        <a href="#" className="projectCardButton">
                            See more
                        </a>
                    </nav>
                </ProjectCard>
                
                <ProjectCard 
                    imgSource={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"} 
                    titleCard={"Este es un titulo de la carta"} 
                    bodyCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos reprehenderit facilis voluptatibus quod cum assumenda modi qui voluptates odio et quaerat sint dolor asperiores, natus iusto animi exercitationem officia."} 
                >
                <a href="#" className="projectCardButton">
                        See more
                </a>
                </ProjectCard>

                <ProjectCard 
                    imgSource={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"} 
                    titleCard={"Este es un titulo de la carta"} 
                    bodyCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos reprehenderit facilis voluptatibus quod cum assumenda modi qui voluptates odio et quaerat sint dolor asperiores, natus iusto animi exercitationem officia."}  
                > 
                <a href="#" className="projectCardButton">
                        See more
                </a>
                </ProjectCard>

                <ProjectCard 
                    imgSource={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"} 
                    titleCard={"Este es un titulo de la carta"} 
                    bodyCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos reprehenderit facilis voluptatibus quod cum assumenda modi qui voluptates odio et quaerat sint dolor asperiores, natus iusto animi exercitationem officia."} 
                > 
                <a href="#" className="projectCardButton">
                        See more
                </a>
                </ProjectCard>

            </div>

        </section>
    )
}

export default Projects;