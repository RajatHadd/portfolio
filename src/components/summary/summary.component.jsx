import "./summary.styles.scss";
import rajatImage from "../../assets/rajat.jpg";
import { TypeAnimation } from "react-type-animation";
import { fadeIn, letter, sentence } from "../../variants";
import { motion } from "framer-motion";
const Summary = () => {
  const line1 =
    "who prioritizes usability and adaptability during projects. Designs sites and apps to attract users with aesthetically pleasing interfaces and exceptional UX elements. Comfortable working within large-scale collaborations or on individually-developed assets.";
  return (
    <div className="summary-wrapper" id="Home">
      <motion.div
        className="summary-left"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <span id="line1">Hi, I'm </span>
        <span id="line2">Rajat Saini,</span>
        <span id="line3">
          <TypeAnimation
            sequence={["React Developer", 10000, "", 1000]}
            speed={50}
            className="text-accent"
            repeat={Infinity}
          />
        </span>

        <motion.div
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          className="about-details"
        >
          <div id="line4">
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

      </motion.div>
      <div className="summary-right">
        <motion.img
          src={rajatImage}
          alt="profile image"
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Summary;
