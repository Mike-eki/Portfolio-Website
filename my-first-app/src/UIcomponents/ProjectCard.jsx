export default function ProjectCard ({imgSource, titleCard, bodyCard, buttonCard}) {
    return (
        <div className="projectCard animation">
                <img className="projectCardImg" src={imgSource}></img>
                <div className="projectCardText">
                    <h3 className="projectCardTitle">
                        {titleCard}
                    </h3>
                    <p className="projectCardBody">
                        {bodyCard}
                    </p>
                    <a href="#" className="projectCardButton">{buttonCard}</a>
                </div>
        </div>
    )
}