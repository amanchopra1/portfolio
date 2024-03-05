import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  /* Linear Gradient */
  background: linear-gradient(
    225deg,
    hsla(45, 82%, 70%, 1) 0%,
    hsla(50, 90%, 60%, 1) 50%,
    hsla(65, 82%, 70%, 1) 100%
);

/* For Mozilla Firefox */
background: -moz-linear-gradient(
    225deg,
    hsla(45, 82%, 70%, 1) 0%,
    hsla(50, 90%, 60%, 1) 50%,
    hsla(65, 82%, 70%, 1) 100%
);

/* For WebKit browsers (Chrome, Safari) */
background: -webkit-linear-gradient(
    225deg,
    hsla(45, 82%, 70%, 1) 0%,
    hsla(50, 90%, 60%, 1) 50%,
    hsla(65, 82%, 70%, 1) 100%
);




  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

// const Contact = () => {
//   //hooks
//   const [open, setOpen] = React.useState(false);
//   const form = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
  //     .then((result) => {
  //       setOpen(true);
  //       form.current.reset();
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };
  const Contact = () => {
    const form = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const email = form.current.elements.from_email.value;
      const name = form.current.elements.from_name.value;
      const subject = form.current.elements.subject.value;
      const message = form.current.elements.message.value;
  
      const mailtoLink = `mailto:amanchopramotivation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  
      window.location.href = mailtoLink;
    };
  
    return (
      <Container>
        <Wrapper>
          <Title>Contact</Title>
          <Desc>
            Feel free to reach out to me for any questions or opportunities!
          </Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="4" name="message" />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
          {/* Snackbar component goes here */}
        </Wrapper>
      </Container>
    );
  };
  
  export default Contact;
