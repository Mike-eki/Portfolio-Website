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
                    <SvgMyPhone /> Aqui va mi telefono
                    </div>
                    <div className="personalData">
                    <SvgMyEmail /> Aqui va mi email
                    </div>
                    <div className="personalData">
                    <SvgMyLocation /> Aqui va mi direccion/vivienda
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