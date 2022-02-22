import SvgEmail from "../svgCode/SvgEmail";
import SvgMessage from "../svgCode/SvgMessage";
import SvgMyEmail from "../svgCode/SvgMyEmail";
import SvgMyLocation from "../svgCode/SvgMyLocation"
import SvgMyPhone from "../svgCode/SvgMyPhone";
import SvgUser from "../svgCode/SvgUser";

function Contacts() {
    return (
        <section className="contactContainer">
            <div className="contactBlend"></div>
            <video className="contacVideo" muted loop autoPlay>
            <source src="/video/contactBack.mp4" type="video/mp4"/>
            </video>

            <div className="sideContact">
                <div className="personalInfo">
                <div className="personalData">
                    <div className="textContact">
                        <h3>Contact me</h3>
                        <p>If there is one project that you want me to participate
                           or a service would you like to know more about it, let me know!</p>
                    </div>
                    </div>
                    <div className="personalData">
                    <SvgMyPhone /><span>+54 9 3418888999</span>
                    </div>
                    <div className="personalData">
                    <SvgMyEmail /> miqueas.moreno2016@gmail.com
                    </div>
                    <div className="personalData">
                    <SvgMyLocation /> Argentina, Santa Fe
                    </div>
                </div>
            </div>

            <div className="sideContact">
                <form className="myForm">
                    <div className="inputGroup">
                            <input className="myName" type={'text'} required/>
                            <label for="myName"><SvgUser />Name</label>
                    </div>
                    <div className="inputGroup">
                        <input className="myEmail" type={"email"} required/>
                        <label for="myEmail"><SvgEmail />Email</label>
                    </div>
                    <div className="inputGroup">
                        <textarea className="myMessage" type={'text'} rows={10} required></textarea>
                        <label for="myMessage"><SvgMessage /> Message</label>
                    </div>
                    <button type={"submit"}>Send</button>
                </form>
            </div>

        </section>
    )
}

export default Contacts;