import cardImg from '../img/image_card_ej.png'
import SvgInstagram from '../svgCode/SvgInstagram';
import SvgYoutube from '../svgCode/SvgYoutube';
import SvgGithub from '../svgCode/SvgGithub';
import SvgLinkedin from '../svgCode/SvgLinkedin';

function About () {
    return (
        <section className="aboutContainer">
            <article className="aboutArticle">
                <div className='aboutText'>
                    <h2>About me</h2>
                    <p>
                    ¿Nunca te ha pasado que había algo que querías hacer, pero no tenias ni idea de "como" hacerlo? ¿O "con" que? ¿O en "donde"?
                    </p>
                    <p>
                    Hola, me llamo Miqueas, me encuentro buscando mi primera experiencia laboral en tecnología.
                    En tiempos de pandemia, curso la carrera de Ingeniera en Sistemas y no solo eso, cada día me capacito de forma autodidacta a través de cursos online y de internet.
                    </p>
                    <p>
                    Tuve la oportunidad de acceder al curso de Soporte Técnico hecho por Junior Achievement Argentina y Google, en donde aprendí todas las bases y aspectos básicos de la tecnología, redes, infraestructura y seguridad informática.
                    </p>
                    <p>
                    Además, me gusta mucho pasar de la teoría a la practica, por lo que todo el conocimiento que voy adquiriendo lo aplico haciendo proyectos personales.
                    Gracias a la capacidades que tengo, puedo hacerle frente a cualquier dificultad que se me presente.
                    </p>
                    <p>
                    Yo quiero ser de esas personas que no desisten ante una problemática. Que no cesan de pensar en una solución y que mueven cielo y tierra para que algo se resuelva.
                    Es por eso que, seguiré trabajando. Sé que cada paso que de, estaré mas aun mas cerca de esa primera experiencia laboral en IT.
                    Soy Miqueas Moreno, y nunca parare de aprender.
                    </p>
                </div>
            </article>

            <aside className="aboutAside">
                <div className="aboutProfile">
                    <img src={cardImg}></img>
                </div>
                <div className="aboutAllLinks">
                    <div className='aboutRowLinks'>
                        <a href='#' className='aboutLink'>
                    <SvgYoutube />
                        </a>
                        <a href='#' className='aboutLink'>
                    <SvgInstagram />
                        </a>
                        <a href='#' className='aboutLink'>
                    <SvgGithub />
                        </a>
                        <a href='#' className='aboutLink'>
                    <SvgLinkedin />
                        </a>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default About;