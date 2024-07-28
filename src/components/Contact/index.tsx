import { Envelope, WhatsappLogo } from "@phosphor-icons/react";
import { ContactContainer, ContactForm, ContactOption, ContactOptions } from "./styles";
import { useForm } from "react-hook-form";

import { message } from 'antd';
interface DataForm {
  name: string
  email: string
  message: string
}

export function Contact(){
  const { register, handleSubmit, reset } = useForm<DataForm>();

  async function dataForm (data:DataForm){
    try{
     const request1 = new Request('https://661d087de7b95ad7fa6bec28.mockapi.io/messages', {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const response =  await fetch(request1);
      
      if(response.status !== 201)
          throw new Error('erro')

      return message.success("Message Sent! I'll get back to you soon.");
    }catch{
      return message.error("Something went wrong.");
    }finally{
      reset();
    }
  }

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
        <ContactForm action="" onSubmit={handleSubmit(dataForm)}>
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            {...register('name')}
          />
          <input 
            type="text" 
            placeholder="Your Email" 
            required
            {...register('email')}
          />
          <textarea 
            rows={7} 
            placeholder="Your Message" 
            required
            {...register('message')}
          />
          
          <button type="submit" className="btn btn-primary">Send Message</button>
        </ContactForm>
      </ContactContainer>
    </section>
  )
}