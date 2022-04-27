export default function ProjectCard ({children ,imgSource, titleCard, bodyCard}) {
    return (
        <>
        <img className="projectCardImg" src={imgSource}></img>
        <article className="projectCardText">
            <h3 className="projectCardTitle">
                {titleCard}
            </h3>
            <p className="projectCardBody">
                {bodyCard}
            </p>
            {children}
        </article>
        </>
    )
}