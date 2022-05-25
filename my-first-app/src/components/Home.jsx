export default function Home() {
        return (
            <main id="home" className="homeContainer">
                <picture className="homeImgContainer">
                    <img className="homeImg" src={require('../img/homePicture.jpg')}></img>
                </picture>
                <div className="homeText">
                    <h1 className="homeTitle">I'm Miqueas Moreno</h1>
                    <p className="homeBody">Making tech tools work together to creating awesome things it's one of my passions</p>
                    <a className="homeScrollDown" href="#projects"></a>
                </div>
            </main>
        )
}