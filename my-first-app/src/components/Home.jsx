export default function Home() {
        return (
            <main id="home" className="homeContainer">
                <div className="homeImgContainer">
                    <img className="homeImg" src={require('../img/homePicture.jpg')}></img>
                </div>
                <div className="homeText">
                    <h2 className="homeTitle">Miqueas Moreno</h2>
                    <p className="homeBody">Creating new paths to empowering people to go further</p>
                    <a className="homeScrollDown" href="#projects"></a>
                </div>
            </main>
        )
}