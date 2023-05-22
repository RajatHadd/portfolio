import "./contact.styles.scss";
import { motion } from "framer-motion";
import { letter, logo, fadeIn } from "../../variants";

import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../contexts/themecontext";

const Contact = () => {
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
        "service_ftmzdyb",
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

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <motion.div className="wrapper-contact" id="Contact"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >

        <div className="contact-left">
          <div className="contact-left-container">
            <motion.div variants={logo} initial="hidden" whileInView="visible">
              {"Get in Touch".split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
            <motion.div variants={logo} initial="hidden" whileInView="visible">
              {"Contact Me :)".split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} >
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
            <input type="submit" onClick={sendEmail} value="Send" className="button c-button" />
            <span style={{color : darkMode ? 'black': ''}}>{done && "Thanks for contacting me!"} </span>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;