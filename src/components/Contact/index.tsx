import { Envelope, WhatsappLogo } from "@phosphor-icons/react";
import { ContactContainer, ContactForm, ContactOption, ContactOptions } from "./styles";

export function Contact(){
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <ContactContainer className="container">
        <ContactOptions>
          <ContactOption>
            <Envelope size={24}/>
            <h4>Email</h4>
            <h5>tiago0214@gmail.com</h5>
            <a href="mailto:tiago0214@gmail.com" target="_blank">Send a Message</a>
          </ContactOption>
          <ContactOption>
            <WhatsappLogo size={24}/>
            <h4>WhatsApp</h4>
            <h5>+55(64)99282-9680</h5>
            <a href="https://api.whatsapp.com/send?phone=5564992829680" target="_blank">Send a Message</a>
          </ContactOption>
        </ContactOptions>
        {/* Form */}
        <ContactForm action="">
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="text" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </ContactForm>
      </ContactContainer>
    </section>
  )
}