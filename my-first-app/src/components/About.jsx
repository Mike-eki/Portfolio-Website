function About () {
    
    const url = 'https://drive.google.com/file/d/1qxE6PH7-LVDg21PiWs8mgsi3CNBEUV9b/view?usp=sharing';

    return (
        <section id='about' className="aboutContainer">
            <article className="aboutArticle">
                <main className='aboutText'>
                    <h2>About me</h2>
                    <p className="animation">
                    I'm a college student at UTN, and I'm studying system engeeniring career, altough I'm also a digital artist, and content creator, who desire to inspire others finding solutions to the problems that we have in the present. I feel extremely fulfilled when I create something that is effective for the purpose it was made, so to do this I stay in tune with learning the lastest tech tools through challenging myself making my own projects which can contribute to make the life's people more easier.
                    </p>
                    <a target='_blank' href={url} className="aboutButtonResume animation">Resume CV</a>
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