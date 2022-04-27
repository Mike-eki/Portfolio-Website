import { lazy, Suspense } from "react";

const IconCentered = lazy(() => import("../UIcomponents/IconCentered"));
const ServicesCard = lazy(() => import("../UIcomponents/ServicesCard"));

function Services () {

    return (
        <section id="services" className="servicesContainer">
            <header className="servicesHeader">
                <h2 className="servicesTitle">Services</h2>
            </header>

            <div className="servicesSubContainer">

            <article className="servicesCard animation">
                <Suspense fallback={<>Loading...</>}>
                <ServicesCard
                    imgSource={"https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"}
                    cardTitle={"Frontend Development"}
                    cardBody={"What I do is place your idea inside on internet in order to being visible, easy to find, well structured and reaching everywhere in the world trough programming"}
                    // "implement... instead of place into"
                    cardSubtitle={"Tools I use:"} >
                    <IconCentered
                        iconSource={"https://www.svgrepo.com/show/349402/html5.svg"}
                        iconName={"HTML"}
                    />
                    <IconCentered
                        iconSource={"https://www.svgrepo.com/show/373535/css.svg"}
                        iconName={"CSS"}
                    />
                    <IconCentered
                        iconSource={"https://www.svgrepo.com/show/349419/javascript.svg"}
                        iconName={"Javascript"}
                    />
                    <IconCentered
                        iconSource={"https://www.svgrepo.com/show/354259/react.svg"}
                        iconName={"React"}
                    />
                </ServicesCard>
                </Suspense>
            </article>

            <article className="servicesCard animation">
                <Suspense fallback={<>Loading...</>}>
                <ServicesCard
                    imgSource={"https://media.giphy.com/media/4N7vzuuVabzWJnwUKx/giphy.gif"}
                    cardTitle={"Digital Art"}
                    cardBody={"I portray everything that's inside of your mind on a screen, written words to reality, with just a graphic tablet and software. The limit is your imagination"}
                    cardSubtitle={"Tools I use:"} >
                    <IconCentered
                        iconSource={"https://www.svgrepo.com/show/373968/photoshop.svg"}
                        iconName={"Photoshop"}
                    />
                    <IconCentered
                        iconSource={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Calligrakrita-base.svg/600px-Calligrakrita-base.svg.png?20220209122951"}
                        iconName={"Krita"}
                    />
                    <IconCentered
                        iconSource={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Inkscape_logo_%282-colour%29.svg/120px-Inkscape_logo_%282-colour%29.svg.png"}
                        iconName={"Inkscape"}
                    />
                    <IconCentered
                        iconSource={"https://www.svgrepo.com/show/353488/blender.svg"}
                        iconName={"Blender"}
                    />
                </ServicesCard>
                </Suspense>
            </article>

            <article className="servicesCard animation">
                <Suspense fallback={<>Loading...</>}>
                <ServicesCard
                    imgSource={"https://media.giphy.com/media/XyJPNKBskIDWR3Md8K/giphy.gif"}
                    cardTitle={"Content Creation"}
                    cardBody={"Sharing your 'thing' with your audience"}
                    cardSubtitle={"Tools I use:"} >
                    <IconCentered
                        iconSource={"https://www.svgrepo.com/show/306484/notion.svg"}
                        iconName={"Notion"}
                    />
                    <IconCentered
                        iconSource={"https://www.clipartmax.com/png/full/33-330217_free-download-canva-arsenal-tube-station.png"}
                        iconName={"Canva"}
                    />
                    <IconCentered
                        iconSource={"https://inceptum-stor.icons8.com/x7phzUUaJsT5/Hitfilm%20express%20icon.png"}
                        iconName={"Hitfilm"}
                    />
                </ServicesCard>
                </Suspense>
            </article>

            </div>
        </section>
    )
}

export default Services;