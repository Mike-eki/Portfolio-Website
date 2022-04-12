/*
Componetizar
*/

function Services () {

    return (
        <section id="services" className="servicesContainer">
            <div className="servicesHeader">
                <h2 className="servicesTitle">Services</h2>
            </div>

            <div className="servicesSubContainer">

                <article className="servicesCard animation">
                    <div className="servicesCardFrame">
                        <img src='https://code.org/shared/images/courses/logo_tall_weblab.jpg'></img>
                    </div>
                    <div className="servicesCardText">
                        <h4 className="servicesCardTitle">Web Development</h4>
                        <p className="servicesCardBody">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perspiciatis neque animi recusandae cum debitis sequi autem rem sit similique?
                        </p>
                        <h5 className="servicesCardSubtitle">Tools I use:</h5>
                        <div className="servicesCardIcons">
                            <div>
                                <svg width="3em" height="3em">           
                                    <image href="https://www.svgrepo.com/show/349402/html5.svg" width="3em" height="3em"/>
                                </svg>
                                <p className="servicesCardIconsName">HTML</p>
                            </div>
                            <div>
                                <svg width="3em" height="3em">       
                                    <image href="https://www.svgrepo.com/show/373535/css.svg" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">CSS</p>
                            </div>
                            <div className="ToCenter">
                                <svg width="3em" height="3em">       
                                    <image href="https://www.svgrepo.com/show/349419/javascript.svg" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">Javascript</p>
                            </div>
                            <div>
                                <svg width="3em" height="3em">       
                                    <image href="https://www.svgrepo.com/show/354259/react.svg" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">React</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="servicesCard animation">
                    <div className="servicesCardFrame">
                        <img src="https://loish.net/wp-content/uploads/2015/09/wacom_01.png?x73825"></img>
                    </div>
                    <div className="servicesCardText">
                        <h4 className="servicesCardTitle">Digital Art</h4>
                        <p className="servicesCardBody">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, facilis nostrum! Tempore consectetur amet, at rem, perspiciatis, odio deserunt eum recusandae temporibus fugit explicabo. Ipsa officia dolore commodi delectus illum.
                        </p>
                        <h5 className="servicesCardSubtitle">Tools I use:</h5>
                        <div className="servicesCardIcons">
                            <div className="ToCenter">
                                <svg width="3em" height="3em">       
                                    <image href="https://www.svgrepo.com/show/373968/photoshop.svg" src="yourfallback.png" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">Photoshop</p>
                            </div>
                            <div>
                                <svg width="3em" height="3em">       
                                    <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Calligrakrita-base.svg/600px-Calligrakrita-base.svg.png?20220209122951" src="yourfallback.png" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">Krita</p>
                            </div>
                            <div className="ToCenter">
                                <svg width="3em" height="3em">       
                                    <image href="https://www.svgrepo.com/show/353488/blender.svg" src="yourfallback.png" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">Blender</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="servicesCard animation">
                    <div className="servicesCardFrame">
                        <img src='https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/blogging-jobs-featured-image.jpg'></img>
                    </div>
                    <div className="servicesCardText">
                        <h4 className="servicesCardTitle">Content Creation</h4>
                        <p className="servicesCardBody">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus debitis velit officiis qui accusamus aut.
                        </p>
                        <h5 className="servicesCardSubtitle">Tools I use:</h5>
                        <div className="servicesCardIcons">
                            <div className="ToCenter">
                                <svg width="3em" height="3em">       
                                    <image href="https://www.svgrepo.com/show/306484/notion.svg" src="yourfallback.png" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">Notion</p>
                            </div>
                            <div className="ToCenter">
                                <svg width="3em" height="3em">       
                                    <image href="https://www.clipartmax.com/png/full/33-330217_free-download-canva-arsenal-tube-station.png" src="yourfallback.png" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">Canva</p>
                            </div>
                            <div className="ToCenter">
                                <svg width="3em" height="3em">       
                                    <image href="https://inceptum-stor.icons8.com/x7phzUUaJsT5/Hitfilm%20express%20icon.png" src="yourfallback.png" width="3em" height="3em"/>    
                                </svg>
                                <p className="servicesCardIconsName">Hitfilm</p>
                            </div>
                        </div>
                    </div>
                        
                </article>

            </div>
        </section>
    )
}

export default Services;