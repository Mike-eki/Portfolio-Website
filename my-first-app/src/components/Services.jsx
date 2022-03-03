import cardImg from "../img/image_card_ej.png";

function Services () {
    return (
        <section className="servicesContainer">
            <div>
                <h2 className="servicesTitle">Services</h2>
            </div>

            <div className="servicesSubContainer">

                <article className="servicesCard">
                    <div className="servicesCardFrame">
                        <img src={cardImg}></img>
                    </div>
                    <div className="servicesCardText">
                        <h4>Web Development</h4>
                        <p>
                        Soy un parrafito con descripcion. Quiza con algunos items o puntos o algo por el estilo como para decir: Hago esto y aquello y esto tambien. Nada mas para que se vea bien
                        </p>
                        <a href="#">May some icons here</a>
                    </div>
                </article>

                <article className="servicesCard">
                    <div className="servicesCardFrame">
                        <img src={cardImg}></img>
                    </div>
                    <div className="servicesCardText">
                        <h4>Web Development</h4>
                        <p>
                        Soy un parrafito con descripcion. Quiza con algunos items o puntos o algo por el estilo como para decir: Hago esto y aquello y esto tambien. Nada mas para que se vea bien
                        </p>
                        <a href="#">May some icons here</a>
                    </div>
                </article>

                <article className="servicesCard">
                    <div className="servicesCardFrame">
                        <img src={cardImg}></img>
                    </div>
                    <div className="servicesCardText">
                        <h4>Web Development</h4>
                        <p>
                        Soy un parrafito con descripcion. Quiza con algunos items o puntos o algo por el estilo como para decir: Hago esto y aquello y esto tambien. Nada mas para que se vea bien
                        </p>
                        <a href="#">May some icons here</a>
                    </div>
                        
                </article>

            </div>
        </section>
    )
}

export default Services;