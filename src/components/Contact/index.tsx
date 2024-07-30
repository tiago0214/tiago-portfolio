import { Envelope, WhatsappLogo } from "@phosphor-icons/react";
import { ContactContainer, ContactForm, ContactOption, ContactOptions } from "./styles";
import { useForm } from "react-hook-form";

import { message } from 'antd';

import { motion, useInView, useAnimation } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { AppContex } from "../../context";

interface DataForm {
  name: string
  email: string
  message: string
}


export function Contact(){
  const { idiomPage } = useContext(AppContex);

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

      return message.success(idiomPage.popUpMessage.sucess);
    }catch{
      return message.error(idiomPage.popUpMessage.error);
    }finally{
      reset();
    }
  }

  const ref = useRef(null);
  const isInView = useInView(ref,{
    once: true
  });
  
  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start('visible')
    }

  },[isInView,mainControls])


  return (
    <motion.section 
      ref={ref} 
      variants={{
        initial: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="initial"
      animate= {mainControls}
      transition={{ duration: 1, delay: 0.2}}
      id="contact"
    >
      <h5>{idiomPage.contact.getInTouch}</h5>
      <h2>{idiomPage.contact.contactMe}</h2>

      <ContactContainer className="container">
        <ContactOptions>
          <ContactOption>
            <Envelope size={24}/>
            <h4>Email</h4>
            <h5>tiago0214@gmail.com</h5>
            <a href="mailto:tiago0214@gmail.com" target="_blank">{idiomPage.contact.sendAMessage}</a>
          </ContactOption>
          <ContactOption>
            <WhatsappLogo size={24}/>
            <h4>WhatsApp</h4>
            <h5>+55(64)99282-9680</h5>
            <a href="https://api.whatsapp.com/send?phone=5564992829680" target="_blank">{idiomPage.contact.sendAMessage}</a>
          </ContactOption>
        </ContactOptions>
        {/* Form */}
        <ContactForm action="" onSubmit={handleSubmit(dataForm)}>
          <input 
            type="text" 
            placeholder={idiomPage.placeholder.yourName}
            required
            {...register('name')}
          />
          <input 
            type="text" 
            placeholder={idiomPage.placeholder.yourEmail}
            required
            {...register('email')}
          />
          <textarea 
            rows={7} 
            placeholder={idiomPage.placeholder.yourMessage} 
            required
            {...register('message')}
          />
          
          <button type="submit" className="btn btn-primary">{idiomPage.contact.sendMessageButton}</button>
        </ContactForm>
      </ContactContainer>
    </motion.section >
  )
}