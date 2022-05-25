import SocialLinks from "../UIcomponents/SocialLinks";

function Footer () {
    return (
        <footer className="footerContainer">
            <article className="footerContent">
                <SocialLinks
                    youtubeClass={"footerSocialIcon"}
                    instagramClass={"footerSocialIcon"}
                    githubClass={"footerSocialIcon"}
                    linkedinClass={"footerSocialIcon"}
                />
                <strong className="footerText">
                {'</>'} Website made by Miqueas Moreno {'</>'}
                </strong>
            </article>
        </footer>
    )
}

export default Footer;