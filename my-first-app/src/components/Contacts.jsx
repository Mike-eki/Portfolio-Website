import SvgEmail from "../svgCode/SvgEmail";
import SvgMessage from "../svgCode/SvgMessage";
import SvgMyEmail from "../svgCode/SvgMyEmail";
import SvgMyLocation from "../svgCode/SvgMyLocation"
import SvgMyPhone from "../svgCode/SvgMyPhone";
import SvgUser from "../svgCode/SvgUser";

function Contacts() {
  return (
    <section id="5" className="contactContainer">

      <div className="contactImgContainer">
      </div>

      <div className="contactSubContainer">
        <div className="personalInfo">
          <div className="contactText">
              <h3>Contact me</h3>
              <p>
                If there is one project that you want me to participate or a
                service would you like to know more about it, let me know!
              </p>
          </div>
          <div className="contactContent">
            <div className="personalIcons">
                <SvgMyPhone />
                <SvgMyEmail />
                <SvgMyLocation /> 
                <span className="phoneData">+54 9 3418888999</span>
                <span className="emailData">miqueas&#8203;.moreno&#8203;2016&#8203;@gmail&#8203;.com</span>
                <span className="locationData"> Argentina, Santa Fe</span>
            </div>
            <div className="personalData">
            </div>
          </div>
        </div>
      </div>

      <div className="contactSubContainer">
        <form className="myForm">
          <div className="inputGroup">
            <input className="myName" type={"text"} required placeholder=" "/>
            <label className="contactLabel" htmlFor="myName">
              <SvgUser />
              Name
            </label>
          </div>
          <div className="inputGroup">
            <input className="myEmail" type={"text"} required placeholder=" " />
            <label className="contactLabel" htmlFor="myEmail">
              <SvgEmail />
              Email
            </label>
          </div>
          <div className="inputGroup">
            <textarea
              className="myMessage"
              type={"text"}
              rows={10}
              required
              placeholder=" "
            ></textarea>
            <label className="contactLabel" htmlFor="myMessage">
              <SvgMessage /> Message
            </label>
          </div>
          <button type={"submit"} className="contactButton">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;