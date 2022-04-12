import ProjectCard from '../UIcomponents/ProjectCard'

const bodyLorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, perferendis! Minus, ducimus!'

/*
Componetizar
*/

function Projects () {

    return (
        <section id="projects" className="projectContainer">
            <div className="projectHeader">
                <h2 className="projectTitle">Projects</h2>
            </div>

            <div className="projectSubContainer">

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Este titulo puede ser bastante largo por lo que puede que haya mas de una linea</h3>
                        <p className="projectCardBody">
                            {bodyLorem} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos reprehenderit facilis voluptatibus quod cum assumenda modi qui voluptates odio et quaerat sint dolor asperiores, natus iusto animi exercitationem officia.
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>

                <ProjectCard 
                imgSource={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"} 
                titleCard={"Este es un titulo de la carta"} 
                bodyCard={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos reprehenderit facilis voluptatibus quod cum assumenda modi qui voluptates odio et quaerat sint dolor asperiores, natus iusto animi exercitationem officia."} 
                buttonCard={"See more"} />

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>    
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>

                <div className="projectCard animation">
                <img className="projectCardImg" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
                
            </div>

        </section>
    )
}

export default Projects;