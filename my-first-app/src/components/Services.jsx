import IconCentered from "../UIcomponents/IconCentered";
import ServicesCard from "../UIcomponents/ServicesCard";

function Services () {

    return (
        <section id="services" className="servicesContainer">
            <header className="servicesHeader">
                <h2 className="servicesTitle">Services</h2>
            </header>

            <div className="servicesSubContainer">

                <ServicesCard
                    imgSource={"https://code.org/shared/images/courses/logo_tall_weblab.jpg"}
                    cardTitle={"Web Development"}
                    cardBody={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates autem voluptatibus dolorum saepe. Alias voluptate, ex nulla nemo unde est libero assumenda itaque quas adipisci voluptates dolores, sapiente minima in."}
                    cardSubtitle={"Tools I use:"}
                >
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

                <ServicesCard
                    imgSource={"https://loish.net/wp-content/uploads/2015/09/wacom_01.png?x73825"}
                    cardTitle={"Digital art"}
                    cardBody={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates autem voluptatibus dolorum saepe. Alias voluptate, ex nulla nemo unde est."}
                    cardSubtitle={"Tools I use:"}
                >
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

                <ServicesCard
                    imgSource={"https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/blogging-jobs-featured-image.jpg"}
                    cardTitle={"Content creation"}
                    cardBody={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates autem voluptatibus dolorum saepe. Alias voluptate, ex nulla nemo unde est Lorem ipsum dolor sit amet."}
                    cardSubtitle={"Tools I use:"}
                >
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

            </div>
        </section>
    )
}

export default Services;