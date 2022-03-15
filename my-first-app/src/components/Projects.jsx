import projectImg from "../img/project_img.jpg";

const bodyLorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, perferendis! Minus, ducimus!'

function Projects () {
    return (
        <section id="2" className="projectContainer">
            <div className="projectHeader">
                <h2 className="projectTitle">Projects</h2>
            </div>

            <div className="projectSubContainer">

                <div className="projectCard">
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta que puede ser de solo 2 renglones</h3>
                        <p className="projectCardBody">
                            {bodyLorem} Problemas solo en desktop
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>


                <div className="projectCard">
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard">
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard">
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard">
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>
        

                <div className="projectCard">
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>

                <div className="projectCard">
                    <div className="projectCardText">
                        <h3 className="projectCardTitle">Titulo de carta</h3>
                        <p className="projectCardBody">
                            {bodyLorem}
                        </p>
                        <a href="#" className="projectCardButton">See more</a>
                    </div>
                </div>

                <div className="projectCard">
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