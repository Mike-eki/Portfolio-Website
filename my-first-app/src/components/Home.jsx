export default function Home() {
        return (
            <section id="home" className="homeContainer">
                <div className="homeImgContainer">
                    <img className="homeImg" src={require('../img/homePicture.jpg')}></img>
                </div>
                <div className="homeText">
                    <h2 className="homeTitle">Miqueas Moreno</h2>
                    <p className="homeDescription">Saving the world since the begining of my existence</p>
                    <a className="homeScrollDown" href="#projects"></a>
                </div>
            </section>
        )
}