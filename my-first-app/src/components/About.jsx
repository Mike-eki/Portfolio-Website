import cardImg from '../img/image_card_ej.png'
import SvgInstagram from '../svgCode/SvgInstagram';
import SvgYoutube from '../svgCode/SvgYoutube';
import SvgGithub from '../svgCode/SvgGithub';
import SvgLinkedin from '../svgCode/SvgLinkedin';

function About () {
    return (
        <section id='4' className="aboutContainer">
            <article className="aboutArticle">
                <div className='aboutText'>
                    <h2>About me</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, assumenda facilis, saepe ad et sint fuga, accusamus perferendis expedita sit doloribus. Earum suscipit non rerum quos aliquam facere, doloremque autem cupiditate eius? Iure corporis, harum ad esse molestias est ipsum recusandae doloribus obcaecati blanditiis eveniet aperiam rem placeat voluptates voluptatem.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quod provident. Velit minima, distinctio inventore, consequatur est asperiores amet odio fugiat atque quasi odit animi perferendis. Nemo repudiandae assumenda temporibus corporis, cupiditate sapiente perferendis dignissimos provident, omnis consequatur laboriosam optio.
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat odio aut a itaque eius culpa incidunt iste doloribus illo.
                    </p>
                </div>
            </article>

            <aside className="aboutAside">
                <div className="aboutProfile">
                    <img src='https://i.pinimg.com/564x/a7/80/1a/a7801a2a8469db649eb7ea41e7abd1d6.jpg'></img>
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