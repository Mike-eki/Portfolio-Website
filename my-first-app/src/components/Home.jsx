export default function Home() {
        return (
            <main id="home" className="homeContainer">
                <picture className="homeImgContainer">
                    <img className="homeImg" src={require('../img/homePicture.jpg')}></img>
                </picture>
                <div className="homeText">
                    <h1 className="homeTitle">Miqueas Moreno</h1>
                    <p className="homeBody">Going where there is no path to leave a trail</p>
                    <a className="homeScrollDown" href="#projects"></a>
                </div>
            </main>
        )
}
// A quoute that maybe can be used here right?
// 10) "Do not go where the path may lead, go instead where there is no path and leave a trail."Ralph Waldo Emerson
// I create new paths to empowering people to go further