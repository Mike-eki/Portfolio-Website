import {useState, useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';

import SvgEmail from "../svgCode/SvgEmail";
import SvgMessage from "../svgCode/SvgMessage";
import SvgUser from "../svgCode/SvgUser";
import SvgSend from "../svgCode/SvgSend";
import SocialLinks from "../UIcomponents/SocialLinks";

function Contacts() {

  const form = useRef();  
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState("")

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //Evita refrescar la pagina al hacer "Submit"
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) errors.username = "Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!regex.test(values.email)) errors.email = "This is not a valid email format"
    if (!values.message) errors.message = "Message is required";
    else if(values.message.length < 10) errors.message = "The message must be more than 10 characters";
    return errors;
  }
  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setSuccess("Message sended succesfully!")

      emailjs.sendForm('gmail', 'portfolio_template', form.current, 'QQRRLPEuZ5i_XYvIr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setFormValues(initialValues)
      setTimeout(() => {
        setSuccess("");
      }, 5000)
    }
  }, [formErrors])

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
              ¡Trabajemos juntos para hacer cosas increibles!
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
        <form onSubmit={handleSubmit} ref={form} className="myForm animation">
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
          <p className="success">{success}</p>
        </form>
      </div>
    </section>
  );
}

export default Contacts;