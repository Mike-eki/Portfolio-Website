import cardImg from "../img/image_card_ej.png";

function Services () {
    return (
        <section className="servicesContainer">
            <div className="textServices">
                <h2>Services</h2>
            </div>
            <div className="cardsContainer">

                <article className="cardBack">

                    <div className="cardImage">
                        <img src={cardImg}></img>
                    </div>
                    <div className="cardText">
                        <h4>Web Development</h4>
                        <p>
                        Soy un parrafito con descripcion. Quiza con algunos items o puntos o algo por el estilo como para decir: Hago esto y aquello y esto tambien. Nada mas para que se vea bien
                        </p>
                        <a href="#">Soy un link</a>
                    </div>

                </article>

                <article className="cardBack">

                    <div className="cardImage">
                        <img src={cardImg}></img>
                    </div>
                    <div className="cardText">
                        <h4>Web Development</h4>
                        <p>
                        Soy un parrafito con descripcion. Quiza con algunos items o puntos o algo por el estilo como para decir: Hago esto y aquello y esto tambien. Nada mas para que se vea bien
                        </p>
                        <a href="#">Soy un link</a>
                    </div>

                </article>

                <article className="cardBack">

                    <div className="cardImage">
                        <img src={cardImg}></img>
                    </div>
                    <div className="cardText">
                        <h4>Web Development</h4>
                        <p>
                        Soy un parrafito con descripcion. Quiza con algunos items o puntos o algo por el estilo como para decir: Hago esto y aquello y esto tambien. Nada mas para que se vea bien
                        </p>
                        <a href="#">Soy un link</a>
                    </div>
                        

                </article>

            </div>
        </section>
    )
}

export default Services;