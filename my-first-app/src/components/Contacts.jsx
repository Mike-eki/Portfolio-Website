import {useState, useEffect} from "react";

import SvgEmail from "../svgCode/SvgEmail";
import SvgMessage from "../svgCode/SvgMessage";
import SvgUser from "../svgCode/SvgUser";
import SvgSend from "../svgCode/SvgSend";
import SocialLinks from "../UIcomponents/SocialLinks";

function Contacts() {

  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //Evita refrescar la pagina al hacer "Submit"
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues); //Poner el popup o modal aca
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) errors.username = "Name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "This is not a valid email format!"
    if (!values.message) errors.message = "Message is required!";
    else if(values.message.length < 10) errors.message = "The message must be more than 10 characters";
    return errors;
  }

  return (
    <section id="contact" className="contactContainer">

      <picture className="contactBackground"></picture>

      <main className="contactSubContainer">
        <article className="personalInfo">
          <header className="contactText">
              <h3>Contact</h3>
          </header>
          <div className="contactAllLinks animation">
              <p className="contactBody animation">
                If there is one project that you want me to participate or a
                service would you like to know more about it, let me know!
              </p>
              <SocialLinks
                youtubeClass={"contactSocialIcon"}
                instagramClass={"contactSocialIcon"}
                githubClass={"contactSocialIcon"}
                linkedinClass={"contactSocialIcon"}
              />
          </div>
        </article>
      </main>

      <div className="contactSubContainer">
        <form onSubmit={handleSubmit} className="myForm animation">
          <div className="inputGroup">
            <input onChange={handleChange} className="myName" name="username" type={"text"} placeholder=" " value={formValues.username}/>
            <label className="contactLabel" htmlFor="myName">
              <SvgUser />
              Name
            </label>
            <p className="warning">{formErrors.username}</p>
          </div>
          <div className="inputGroup">
            <input onChange={handleChange} className="myEmail" name="email" type={"email"} placeholder=" " value={formValues.email} />
            <label className="contactLabel" htmlFor="myEmail">
              <SvgEmail />
              Email
            </label>
            <p className="warning">{formErrors.email}</p>
          </div>
          <div className="inputGroup">
            <textarea
              onChange={handleChange}
              className="myMessage"
              name="message"
              type={"text"}
              rows={10}
              placeholder=" "
              value={formValues.message}
            ></textarea>
            <label className="contactLabel" htmlFor="myMessage">
              <SvgMessage />
              Message
            </label>
            <p className="warning">{formErrors.message}</p>
          </div>
          <button type={"submit"} className="contactButton">
            <SvgSend />
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;