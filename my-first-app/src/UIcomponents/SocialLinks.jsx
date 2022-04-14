import SvgYoutube from "../svgCode/SvgYoutube"
import SvgInstagram from "../svgCode/SvgInstagram"
import SvgGithub from "../svgCode/SvgGithub"
import SvgLinkedin from "../svgCode/SvgLinkedin"

export default function SocialLinks({youtubeClass, instagramClass, githubClass, linkedinClass}) {
    return(
        <nav className='contactRowLinks'>
            <a href='#' className='contactLink'>
                <SvgYoutube
                    theClassName={youtubeClass}
                />
            </a>
            <a href='#' className='contactLink'>
                <SvgInstagram 
                    theClassName={instagramClass}
                />
            </a>
            <a href='#' className='contactLink'>
                <SvgGithub
                    theClassName={githubClass}
                />
            </a>
            <a href='#' className='contactLink'>
                <SvgLinkedin
                    theClassName={linkedinClass}
                />
            </a>
        </nav>
    )
}