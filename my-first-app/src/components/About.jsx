

function About () {

    return (
        <section id='about' className="aboutContainer">
            <article className="aboutArticle">
                <main className='aboutText'>
                    <h2>About me</h2>
                    <p className="animation">
                    ¡Hola! Soy Miqueas. Me dedico a constantemente aprender sobre tecnologia y arte. Estas dos areas me impulsan a desafiarme a mi mismo a crear soluciones que aun no han sido vistas todavia. Esta motivacion nacio en el momento en que juge por primera vez un videojuego, que es una fusion entre la programacion, arte visual y musica. Pico mi curiosidad el saber como estan hechos, el ver que muchas disciplinas estan involucradas en el proceso, me inspiro a nunca parar de aprender.
                    </p>
                    <a href="#" className="aboutButtonResume animation">Resume CV</a>
                </main>
            </article>

            <aside className="aboutAside">
                <picture className="aboutProfile animation">
                    <img src={require("../img/aboutPicture.jpg")}></img>
                </picture>
            </aside>
        </section>
    )
}

export default About;