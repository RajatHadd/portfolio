import './contact.styles.scss'

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");

  const handleUserInput1 = (e) => {
    setField1(e.target.value);
  };
  const handleUserInput2 = (e) => {
    setField2(e.target.value);
  };
  const handleUserInput3 = (e) => {
    setField3(e.target.value);
  };
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_osdl7xa",
        "template_h5nhqdj",
        form.current,
        "8WlImGVMZxBNHsfbt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setField1("");
          setField2("");
          setField3("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="wrapper-contact" id="Contact">
        <div className="contact-left">
          <div className="contact-left-container">
            <div>Get in touch </div>
            <div> Contact me </div>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
              onChange={handleUserInput1}
              value={field1}
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="E-mail"
              onChange={handleUserInput2}
              value={field2}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleUserInput3}
              value={field3}
            />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for contact me!"} </span>
          </form>
        </div>
      </div>
    </>
  );
}
